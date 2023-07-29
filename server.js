const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Handling form submission
app.post('/submit', (req, res) => {
  const { username, email, message, gender } = req.body;
  // Process the form data here, e.g., save to a database, send an email, etc.
  console.log('Received form data:');
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Gender:', gender);

  // Send a response to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
