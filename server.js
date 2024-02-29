'use strict';
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const fs = require('fs');

app.get('/postServer/data', (req, res) => {
  fs.readFile('src/data/posts.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/postServer/addPost', function(req, res) {
  let path = 'src/data/posts.json';
  fs.readFile(path, 'utf-8', (err, data) =>{
    if (err) {
      console.log(err);
    } else {
      try {
        const priorData = JSON.parse(data);
        priorData.push(req.body);
        fs.writeFile (path, JSON.stringify(priorData), (err) => {
          console.log(err);
        })
        res.json(priorData);
      } catch (err) {
        console.log(err);
      }
    }

  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});