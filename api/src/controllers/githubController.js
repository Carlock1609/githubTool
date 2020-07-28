// const axios = require('axios');

const Student = require('../models/Student');

// POST - accepts post from cron to update commits at 12:00am
exports.create_students = async (req, res) => {
    const { name, repo, commits, className } = req.body;

    try {
        let student = await Student.findOne({ name });
        if(student) {
            return res.status(400).json({ errors: [{ msg: 'Student Already exists' }] });
        }
        student = new Student({
            name,
            repo,
            commits,
            className
        });
        
        await student.save();

        res.json(student)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
};

// POST - accepts post from cron to update commits at 12:00am
exports.create_commits = async (req, res) => {
    const { name, commit } = req.body;

    try {
        let student = await Student.findOne({ name });
        if(!student) {
            return res.status(400).json({ errors: [{ msg: 'Student Does not exist' }] });
        }

        student.commits.unshift(commit)
        
        await student.save();

        res.json(student)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
};

// GET - all students repos/commits
exports.get_commits = async (req, res) => {
    try {
        const student = await Student.find({})

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

