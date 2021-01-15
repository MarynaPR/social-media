const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-media', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);

// app.use(require('./routes'));
app.listen(PORT, () => console.log(`CONNECTED on ${PORT}`));
