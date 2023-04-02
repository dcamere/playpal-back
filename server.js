const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const { OAuth2Client } = require('discord-oauth2');
const oauth = new OAuth2Client({
  clientId: '1088816783982608434',
  clientSecret: 'S57VFmfe8M6VK9i4ONK9S6qC-cChMtVC',
  redirectUri: 'http://44.201.173.161:3000/auth'
});

const url = oauth.generateAuthUrl({
  scope: ['identify', 'email'],
  state: 'SOME_STATE_VALUE'
});

// This is the URL you should use in your login button
console.log(url);