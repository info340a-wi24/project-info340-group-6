import React from 'react';
import { useParams } from 'react-router-dom';

function PostsByUser() {
  console.log(useParams);
  const { postId } = useParams(); // Get the postId from the URL parameters

  return (
    <div>
      <h1>Post By User Page</h1>
      <p>Fire ID: {postId}</p>
      {/* You can add more content here */}
    </div>
  );
}

export default PostsByUser;