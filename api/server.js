// App + DB imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connecting mongoose
connectDB();

// middleware
app.use(express.json({extended:false}));

// Setting up routes
const githubRoutes = require('./src/routes/api/github');

// Mounting routes on app
app.use('/api/github', githubRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('SERVER IS UP! @ ' + PORT);
});









