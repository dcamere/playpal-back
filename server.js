require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');
app.use(cors());

const uri = `mongodb+srv://playpaldev:${process.env.DB_PASSWORD}@cluster0.1c24rwd.mongodb.net/?retryWrites=true&w=majority`;

const userSchema = new mongoose.Schema({
  user: String,
  password: String
});

const User = mongoose.model('playpal', userSchema, 'playpal');

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch(error) {
    console.error(error);
  }
}

connect();

// Define a route that returns an object
app.get('/', async (req, res) => {
  const users = await User.find();
  console.log(users);
  // const obj = {
  //   projectName: "Playpal",
  //   version: "1.0.0",
  //   devs: ["Diego Camere", "Salvatore Pazzaglia"]
  // }
  res.json(users);
});

app.get('/persons', (req, res) => {
  const bigDummyObject = {
    name: "Alice",
    age: 27,
    occupation: "Software Engineer",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    hobbies: ["reading", "hiking", "cooking", "traveling"],
    friends: [
      {
        name: "Bob",
        age: 29,
        occupation: "Data Analyst",
        address: {
          street: "456 Oak St",
          city: "Anycity",
          state: "CA",
          zip: "67890"
        },
        hobbies: ["swimming", "painting", "biking"],
      },
      {
        name: "Charlie",
        age: 25,
        occupation: "Graphic Designer",
        address: {
          street: "789 Maple Ave",
          city: "Anystate",
          state: "CA",
          zip: "23456"
        },
        hobbies: ["photography", "gardening", "dancing"],
      }
    ],
    favoriteFoods: {
      breakfast: "pancakes",
      lunch: "sandwich",
      dinner: "pizza"
    }
  };
  
  res.json(bigDummyObject);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// const { OAuth2Client } = require('discord-oauth2');
// const oauth = new OAuth2Client({
//   clientId: '1088816783982608434',
//   clientSecret: 'S57VFmfe8M6VK9i4ONK9S6qC-cChMtVC',
//   redirectUri: 'http://44.201.173.161:3000/auth'
// });

// const url = oauth.generateAuthUrl({
//   scope: ['identify', 'email'],
//   state: 'SOME_STATE_VALUE'
// });

// // This is the URL you should use in your login button
// console.log(url);