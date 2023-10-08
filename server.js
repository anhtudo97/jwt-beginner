const express = require('express');
const app = express();
const {
  verifyToken,
  signAccessToken,
  signRefreshToken,
} = require('./init_jwt');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API
app.get('/api/login', async (req, res) => {
  return res.status(200).json({
    status: 'success',
    element: {
      accessToken: await signAccessToken(),
      // refreshToken: await signRefreshToken(),
    },
  });
});

app.get('/api/refresh-token', async (req, res) => {
  return res.status(200).json({
    status: 'success',
    element: {
      accessToken: await signAccessToken(),
    },
  });
});

app.get('/api/users', verifyToken, (req, res) => {
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
