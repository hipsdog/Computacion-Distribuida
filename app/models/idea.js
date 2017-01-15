var mongoose = require('mongoose');
var ideaSchema = mongoose.Schema({
        autor       : String,
        text        : String
});
module.exports = mongoose.model('Idea', ideaSchema);
