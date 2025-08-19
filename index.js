const express = require('express');
const app = express();
const port = 3001;

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/datetime', (req, res) => {
  const now = new Date();
  res.json({ time: now.toISOString() });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});






