const path = require('path');
const express = require('express');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
  console.log('Server running on port 5000...');
})