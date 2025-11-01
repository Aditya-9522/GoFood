const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoDB = require('./db');

mongoDB();

// ✅ Use cors middleware globally
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow common HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers used in requests
  credentials: true // Optional: if you're using cookies or auth headers
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/LoginUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
