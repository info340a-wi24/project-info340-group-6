import React from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import SAMPLE_POST from '../data/testData.json';
import PostsPage from './PostsPage';
import About from './About';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';



function App() {
  //const data = SAMPLE_POST;
  const [data, setData] = useState(null);

  async function getData(){
    try {
      const response = await fetch('http://localhost:5000/postServer/data');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setData(await response.json());
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <div className="misson-statement">
            <h2>Welcome to Sparkspotter</h2>
            <p>Our mission is to empower communities by providing real-time wildfire tracking and educational resources, creating a proactive approach to wildfire prevention and safety.</p>
        </div>
      </header>

      <main>
        <Routes>
          <Route index element={<PostsPage data={data || SAMPLE_POST} />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Navigate to="/about" />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2024 Sparkspotter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
