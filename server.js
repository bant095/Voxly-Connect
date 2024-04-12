require('dotenv').config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Create an Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Define a route
// app.get('/', (req, res) => {
//   res.json({ msg: 'Hello from Voxly' });
// });

//Routes
app.use('/api', require('./routes/authRouter'));

// MongoDB URI from environment variables
const URI = process.env.MONGODB_URL;

// Connect to MongoDB using Mongoose
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Start the Express server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
