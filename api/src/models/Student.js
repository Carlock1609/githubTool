const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    repo: {
        type: String, 
        required: true,
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