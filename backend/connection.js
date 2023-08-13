const mongoose = require('mongoose');

const url = 'mongodb+srv://abutalhazaki92:1234@cluster0.ds1xuth.mongodb.net/uptourism?retryWrites=true&w=majority';

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;