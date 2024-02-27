'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let postData = [
  {
      "source":"project-draft/img/WaWildFire.jpg",
      "alt":"Wild fire",
      "header":"My world is on fire, how about yours",
      "coordinates":"47° 43' 42'' Latitude-121° 20' 46'' Longitude",
      "date":"09/15/2022",
      "content":"But that's the I like it because I'll never get bored."
  },

  {
      "source":"project-draft/img/WaWildFire.jpg",
      "alt":"Wild fire",
      "header":"My world is on fire, how about yours",
      "coordinates":"47° 43' 42'' Latitude-121° 20' 46'' Longitude",
      "date":"09/15/2022",
      "content":"But that's way I like it because I'll never get bored."
  },

  {
      "source":"project-draft/img/WaWildFire.jpg",
      "alt":"Wild fire",
      "header":"My world is on fire, how about yours",
      "coordinates":"47° 43' 42'' Latitude-121° 20' 46'' Longitude",
      "date":"09/15/2022",
      "content":"But that's the way I like it because I'll never get bored."
  },

  {
      "source":"project-draft/img/WaWildFire.jpg",
      "alt":"Wild fire",
      "header":"My world is on fire, how about yours",
      "coordinates":"47° 43' 42'' Latitude-121° 20' 46'' Longitude",
      "date":"09/15/2022",
      "content":"But the way I like it because I'll never get bored."
  }
]

app.get('/postServer/data', (req, res) => {
  res.type('json');
  res.send(postData);
});

app.post('/postServer/addPost', function(req, res) {
  res.type('json');
  const newPost = req.body;
  postData.push(newPost);
  res.status(201).json({ message: 'Post added successfully', postData });
});
