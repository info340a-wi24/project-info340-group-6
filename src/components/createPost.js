import React, {useState} from "react";
import { getDatabase, ref, onValue, push, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';



export function DisplayForm(){
  const navigate = useNavigate();
  const [headerText, updateHeader] = useState('');
  const [contentText, updateContent] = useState('');

  function changeHeader(event){
    updateHeader(event.target.value);
  }

  function changeContent(event){
    updateContent(event.target.value)
  }

  function addPost(formData) {
    const db = getDatabase();
    const postListRef = ref(db, 'posts');

    push(postListRef, formData);
  };

  async function formSubmit(event){
    let today = new Date().toLocaleString();
    try {
      await addPost({source: "/img/WaWildFire.jpg", alt: headerText, header:headerText, coordinates: localStorage.getItem('address'), date:today , content: contentText});
    } catch (err) {
      console.log(err);
    }
    updateHeader('');
    updateContent('');
    navigate('/posts');
  }

  return (
  <div className="row mb-1">
    <div id="post-form">
      <h2>Create a New Post:</h2>
      <label>
        Title:
        <input
          type="text"
          name="header"
          defaultValue={headerText}
          onChange={changeHeader}
          placeholder="Enter title"
        />
      </label>

      <label>
        Details:
        <textarea id="content-box"
          rows='10'
          type="text"
          name="content"
          defaultValue={contentText}
          onChange={changeContent}
          placeholder="Enter description"
        />
      </label>

      <button id="sendForm" onClick={formSubmit}>Submit Post</button>
    </div>
  </div>
  )
}