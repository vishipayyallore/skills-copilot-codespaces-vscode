// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Create a route for GET /comments/:id/complaints
// 8. Create a route for POST /comments/:id/complaints
// 9. Create a route for GET /comments/:id/complaints/:id
// 10. Create a route for PUT /comments/:id/complaints/:id
// 11. Create a route for DELETE /comments/:id/complaints/:id

// Load modules
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Comment from './models/comment';
import Complaint from './models/complaint';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments');

// Create web server
const app = express();

// Configure web server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(comments);
    }
  });
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  const comment = new Comment({