const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    repo: {
        type: String, 
        required: false,
    },
    commits: [{
        type: String, 
        required: false,
    }],
    className: {
        type: String,
        required: false,
    }
})

module.exports = Student = mongoose.model('student', StudentSchema);