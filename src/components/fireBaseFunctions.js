import { getDatabase, ref, onValue, push } from 'firebase/database';
import { useState, useEffect } from 'react';

export function GetPosts() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const postRef = ref(db, "posts");

    // returns a function that will "unregister" (turn off) the listener
    const unregisterFunction = onValue(postRef, (snapshot) => {
      const postValue = snapshot.val();
      setPostData(postValue);
      // ...set state variable, etc...
    });

    // cleanup function for when the component is unmounted
    return () => {
      unregisterFunction(); // call the unregister function
    };
  }, []); // empty dependency array to run effect only once on mount
  console.log(postData);
  return postData;
}

export function AddNewPost(newPostData) {
  const db = getDatabase();
  const postListRef = ref(db, 'posts');

  // Use push to add a new post with a unique key
  push(postListRef, newPostData);
};

