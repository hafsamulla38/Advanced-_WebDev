const express = require('express');
const app = express();
const port = 4000;

// Sample users data
const users = {
  1: { id: 1, name: 'Alice', age: 25 },
  2: { id: 2, name: 'Bob', age: 30 },
  3: { id: 3, name: 'Charlie', age: 35 }
};

// Route to get all users
app.get('/user', (req, res) => {
  console.log('GET /user called');
  res.json(users);
});

// Route to get a user by ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  console.log(`GET /user/${userId} called`);

  const user = users[userId];

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: `User with ID ${userId} not found.` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
