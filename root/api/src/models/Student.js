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
        // Do I want this to be unique so if it alread yhas one it wont push it again?
        // unique: true
    }],
    className: {
        type: String,
        required: false,
    }
})

module.exports = Student = mongoose.model('student', StudentSchema);