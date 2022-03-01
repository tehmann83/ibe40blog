const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(console.log('Connected to MongoDB'))
	.catch(err => {
		console.log('ERROR connecting to MongoDB: ', err);
	});

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
	console.log(`Backend is running on port ${PORT}.`);
});
