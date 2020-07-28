const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: false
    },
    repo: {
        type: String, 
        required: false,
        unique: true
    },
    commits: {
        type: Array, 
        required: true
    },
    className: {
        type: String,
        required: false,
    }
})

module.exports = Student = mongoose.model('student', StudentSchema);