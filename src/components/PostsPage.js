import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue, push, get } from 'firebase/database';


function GetPosts() {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
      const db = getDatabase();
      const postRef = ref(db, "posts");
      const unregisterFunction = onValue(postRef, (snapshot) => {
        const postValue = snapshot.val();
        setPostData(postValue);
      });

      return () => {
        unregisterFunction();
      };
    }, []);

    console.log(postData);
    return postData;
  }

export default function PostsPage() {
    const [data, setData] = useState(null);
      useEffect(() => {
        const db = getDatabase();
        const postRef = ref(db, "posts");
        const unregisterFunction = onValue(postRef, (snapshot) => {
          const postValue = snapshot.val();
          setData(postValue);
        });

        return () => {
          unregisterFunction();
        };
      }, []);

    if (data === null){
        return <p>Loading...</p>
    } else {
        const postArr = Object.values(data).map((post, index) => (
            <Post key={index} fire={post} />
          ));
          console.log(postArr);

          return (
            <div className="container">
              <div className="row justify-content-center">{postArr}</div>
            </div>
          );
    }

  }

function Post(props) {
    console.log(props.fire)
    const fire = props.fire;
    const navigate = useNavigate();

    const goHere = () => {
        navigate(`/postByUser/${fire.id}`);
    };

    return (
        <div className="post col-sm-6 col-md-4" onClick={goHere}>
            {/*<img className='py-1' src={process.env.PUBLIC_URL + fire.source} alt={fire.alt} />*/}
            <h2>{fire.header}</h2>
            <em>{fire.date} - {fire.coordinates}</em>
            <p>Poster: {fire.fname} {fire.lname}</p>
            <p>{fire.content}</p>
        </div>
    )
}
