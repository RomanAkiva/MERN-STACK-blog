const express = require('express');
const app = express();
const mongoose = require('mongoose');

await mongoose.connect('mongodb+srv://roman:Rr12121212@cluster0-swkt6.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => console.log('DB Connected.'))
                        .catch(err => console.log('error:::', err));

app.get('/', (req, res) => res.send('Hello.....:)'));

app.listen(5000, console.log('connected..'));
