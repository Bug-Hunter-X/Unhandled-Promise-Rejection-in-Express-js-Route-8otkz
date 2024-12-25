const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found'); //This will cause the error
  }
  res.send(userData);
});