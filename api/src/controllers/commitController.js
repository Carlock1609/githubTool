const axios = require('axios');

const Student = require('../models/Student');

// Register User - POST
exports.post_commits = async (req, res) => {
    const { name, repo, commits, className } = req.body;

    try {
        let student = await Student.findOne({ name });
        if(!student) {
            return res.status(400).json({ errors: [{ msg: 'Student Does not exist' }] });
        }

        student = new Student({
            name,
            repo,
            commits,
            className
        });
        
        await student.save();

    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
};

exports.get_commit = async (req, res) => {
    try {
        const student = await Student.findOne({ name: req.name });

        if(!student) {
            return res.status(404).json({ msg: 'Student not found' });
        }

        res.json(student)
    } catch (err) {
        console.log(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Student entry not found' });
        }
        res.status(500).send('Server error');
    }
};

