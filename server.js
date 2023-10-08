const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API
app.get('/api/login', (req, res) => {
  return res.status(200).json({
    status: 'success',
    element: {
      token: 'access_token',
      timeExpired: Date.now() + 60 * 1000,
    },
  });
});

app.get('/api/refresh-token', (req, res) => {
  return res.status(200).json({
    status: 'success',
    element: {
      token: 'new_access_token',
      timeExpired: Date.now() + 60 * 1000,
    },
  });
});

app.get('/api/users', (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: [
      {
        name: 'tuanh',
      },
      {
        name: 'ahihi',
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Sever running at ${PORT}`);
});
