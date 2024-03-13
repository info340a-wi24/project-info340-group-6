import React from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import SAMPLE_POST from '../data/testData.json';
import PostsPage from './PostsPage';
import About from './About';
import NavBar from './NavBar';
import Profile from './Profile';
import FiresNearYou from './FiresNearYou';
import News from './News.js';
import { useState, useEffect } from 'react';
import {DisplayForm} from './createPost.js'
import Resources from './Resources.js';
import Prepare from './Prepare.js';
import During from './During.js';
import AfterFire from './AfterFire.js';



function App() {
  //const data = SAMPLE_POST;
  const [data, setData] = useState(null);
  const [articles, setArticles] = useState([]);

  async function getData(){
    try {
      const response = await fetch('http://localhost:5000/postServer/data');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setData(await response.json());
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  useEffect(() => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    // Format the date in 'YYYY-MM-DD' format
    const fromDate = lastMonth.toISOString().split('T')[0];

    const url = `https://newsapi.org/v2/everything?` +
            `q=fires OR "forest fires" OR wildfires&` + 
            `from=${fromDate}&` +
            'pageSize=20&' +
            `sortBy=publishedAt&` +
            `domains=nationalgeographic.com,npr.org,pbs.org/newhournature.com,fs.fed.us,sciencemag.org,weather.com,mnm.com,sierraclub.org,scientificamerican.com,greenpeace.org,ecowatch.com,climatecentral.org,environmentalnewsnetwork.com,fire.ca.gov,inciweb.nwcg.gov&` + // Restrict search to these domains for high-quality, relevant articles
            `apiKey=19026760006e40e7bc668a48612e7410`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div>
      <header>
        <NavBar />
        <div className="mission-statement">
            <h2>Welcome to Sparkspotter</h2>
            <p>Our mission is to empower communities by providing real-time wildfire tracking and educational resources, creating a proactive approach to wildfire prevention and safety.</p>
        </div>
      </header>

      <main className='container-fluid'>
      <Routes>
        <Route index element={<PostsPage data={data || SAMPLE_POST} />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
        <Route path='firesnearyou' element={<FiresNearYou />} />
        <Route path='resources' element={<Resources articles={articles}/>}>
          <Route path='news' element={<News articles={articles}/>} />
          <Route path='prepare' element={<Prepare />} />
          <Route path='during' element={<During />} />
          <Route path='after' element={<AfterFire />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

      </main>

      <footer>
        <p>&copy; 2024 Sparkspotter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
