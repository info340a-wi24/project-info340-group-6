import React, {useState} from "react";


function addPost({formData}){
  try {
    fetch('http://localhost:5000/postServer/addPost', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  } catch (err) {
    console.log('bad');
  }
}



export function DisplayForm(){
  const [headerText, updateHeader] = useState('');
  const [dateText, updateDate] = useState('');
  const [contentText, updateContent] = useState('');

  function changeHeader(event){
    updateHeader(event.target.value);
  }

  function changeContent(event){
    updateContent(event.target.value)
  }

  function formSubmit(event){
    updateHeader('');
    updateContent('');
    updateDate(new Date());
    addPost({source: null, alt: headerText, header:headerText, coordinates: null, date:dateText, content: contentText})
  }

  return (
    <div>
      Hello!
      <input name='header' onChange={changeHeader} defaultValue={headerText}></input>
      <input name='content' onChange = {changeContent} defaultValue={contentText}></input>
      <button id='sendForm'onClick={formSubmit}>Submit Post</button>
    </div>
  )
}