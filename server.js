const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/agroconnect');

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
