const db = require('./db');
const express = require('express');
const app = express();

// Routes
const campaign = require('./routes/campaigns');

const port = 3001;

// TODO: Need to set up databases here
db.init();

// Use our routes
app.use('/campaign', campaign);


app.listen(port, () => {
	console.log(`API listening on port ${3001}`);
});
