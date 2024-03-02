import React, {useState} from "react";




export function DisplayForm(){
  const [headerText, updateHeader] = useState('');
  const [contentText, updateContent] = useState('');

  function changeHeader(event){
    updateHeader(event.target.value);
  }

  function changeContent(event){
    updateContent(event.target.value)
  }

  async function addPost(formData){
    try {
      await fetch('http://localhost:5000/postServer/addPost', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    } catch (err) {
      console.log('bad');
    }
  }

  async function formSubmit(event){
    let today = new Date().toLocaleString();
    try {
      await addPost({source: "/img/WaWildFire.jpg", alt: headerText, header:headerText, coordinates: localStorage.getItem('address'), date:today , content: contentText});
    } catch (err) {
      console.log(err);
    }
    updateHeader('');
    updateContent('');
    window.location.reload();
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