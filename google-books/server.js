// setting initial requirements, middleware, mongoose connections, and port listening.

const express = require('express');
const mongoose = require('mongoose');
const routes = require('routes');

const PORT = process.send.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.statis('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to database')
});
mongoose.connection.on('error', () => {
    console.log('Error connecting to database')
});
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from database')
});

app.listen(PORT, () => {
    console.log(`server now listening on port ${PORT}.`);
})