import { getDatabase, ref, onValue, push } from 'firebase/database';
import { useState, useEffect } from 'react';

export function GetPosts() {
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

export function AddNewPost(newPostData) {
  const db = getDatabase();
  const postListRef = ref(db, 'posts');

  push(postListRef, newPostData);
};

