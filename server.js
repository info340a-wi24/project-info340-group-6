'use strict';
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

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
  }
]

app.get('/postServer/data', (req, res) => {
  //res.type('json');
  res.json(postData);
  //res.send('Hi');
});

app.post('/postServer/addPost', function(req, res) {
  res.type('json');
  const newPost = req.body;
  postData.push(newPost);
  res.status(201).json({ message: 'Post added successfully', postData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});