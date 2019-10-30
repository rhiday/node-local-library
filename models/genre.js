const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema (
    {
        name: {type: String, required: true, max: 100}

    }
);

GenreSchema
.virtual('url')
.get(() => {
    return 'catalog/bookinstance/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);