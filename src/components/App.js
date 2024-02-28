import React from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import SAMPLE_POST from '../data/testData.json';
import PostsPage from './PostsPage';
import About from './About';
import NavBar from './NavBar';


function App() {
  const data = SAMPLE_POST;
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
          <Route index element={<PostsPage data={data} />} />
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
