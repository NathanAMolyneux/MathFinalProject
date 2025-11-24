// backend/server.js
require('dotenv').config({ path: './example.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const requestRoutes = require('./routes/requestRoutes');

// 1. Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Global Middleware
app.use(cors());
app.use(express.json());
app.use('/api/requests', requestRoutes);

// 3. Routes
// Any route inside authRoutes will be prefixed with /api/auth
app.use('/api/auth', require('./routes/authRoutes'));

// 4. Error Middleware (Must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});