const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
    id: {
        type: String, 
        default: ""
    },
    title: {
        type: String, 
        default: ""
    },
    subtitle: {
        type: String,
        default: ""
    }, 
    body: {
        type: String, 
        default: ""
    },
    author: {
        type: String, 
        default: ""
    }
})

const ArticleSchema = mongoose.model('ArticleSchema', ArticleSchema);

module.exports = ArticleSchema;