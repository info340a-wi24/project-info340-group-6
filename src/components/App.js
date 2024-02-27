import React from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import SAMPLE_POST from '../data/testData.json';
import PostsPage from './PostsPage';


function App() {
  const data = SAMPLE_POST;
  return (
    <div>
      <PostsPage  data={data} />
    </div>
  );
}

export default App;
