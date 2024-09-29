const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employees');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
//employee routes
app.use('/api/employees', employeeRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employee_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,  // 30 seconds
})


.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
