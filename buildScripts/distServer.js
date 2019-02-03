/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if(err){
    console.log(err);
  } else {
    open('http://localhost:4000');
  }
});
