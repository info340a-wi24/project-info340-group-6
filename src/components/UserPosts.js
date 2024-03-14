import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';

function PostsByUser() {
  const { postId } = useParams(); // Get the postId from the URL parameters
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          const db = getDatabase();
          const postsRef = ref(db, 'posts');
          console.log(postId);
          let newPostId = parseInt(postId);

          const userPostsQuery = query(postsRef, orderByChild('id'), equalTo(newPostId));

          try {
              const snapshot = await get(userPostsQuery);
              console.log(snapshot.val());
              if (snapshot.exists()) {
                  const postData = snapshot.val();
                  const postsArray = Object.values(postData);
                  setPosts(postsArray);
                  console.log(postData);
                  console.log(postsArray);
              } else {
                  setPosts([]);
              }
          } catch (error) {
              console.error('Error fetching posts:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchData();

      // Cleanup function
      return () => {
          // Any cleanup logic goes here
      };
  }, [postId]);

  if (loading) {
      return <p>Loading...</p>;
  }
  return (
      <div className='post col-sm-6 col-md-4 mx-auto text-center'>
          <h1>Posts By User Page</h1>
          <p>User ID: {postId}</p>
              <div>
                  {posts.map((post, index) => (
                      <div key={index}>
                          <h2>{post.header}</h2>
                          <p>{post.content}</p>
                          {/* Additional post details */}
                      </div>
                  ))}
              </div>
      </div>
  );
}

export default PostsByUser;