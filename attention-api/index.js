const calls = require('./calls.json');
const advancedCalls = require('./advancedCalls.json');
const express = require('express');
const bodyParser = require('body-parser');
const postmark = require('postmark');
const https = require("https");
const fs = require("fs");
const vhost = require("vhost");
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const attention = express()

app.use(vhost(`attention.birkjohannessen.com`, attention));
app.use(bodyParser.json());
app.use(cors());
attention.use(cors());
attention.use(bodyParser.json());


attention.post('/notify', (req, res) => {

  const allowedCalls = calls.map(O => O.name);
  const inObj = req.body;
  const resObj = {'response':'FAIL'}
  console.log(inObj);
  console.log(inObj.content)
  console.log(inObj.response)

  console.log(calls.map(O => O.name));
  if(allowedCalls.includes(inObj.content)){

    resObj['response'] = "OK";
    //mailersend(inObj.content)
    fetch('http://xdroid.net/api/message?k=k-6d9d2ea0dd04&t='+ inObj.content + '&c=' + inObj.response + '&u=https://attention.birkjohannessen.com/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
  }
  console.log(resObj);
  res.send(resObj);
});

attention.post('/notifyAdvanced', (req, res) => {

  const allowedCalls = advancedCalls.map(O => O.name);
  const inObj = req.body;
  const resObj = {'response':'FAIL'}
  console.log(inObj);
  console.log(inObj.content)
  console.log(inObj.response)
  console.log(advancedCalls.map(O => O.name));
  if(allowedCalls.includes(inObj.content)){

    resObj['response'] = "OK";
    //mailersend(inObj.content)
    fetch('http://xdroid.net/api/message?k=k-6d9d2ea0dd04&t='+ inObj.content + '&c=' + inObj.response + '&u='+inObj.path, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
  }
  console.log(resObj);
  res.send(resObj);
});


https
.createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
      key: fs.readFileSync("privkey.pem"),
      cert: fs.readFileSync("fullchain.pem"),
    },
    app
  )
  .listen(4000, ()=>{
    console.log('server is runing at port 4000')
  });
