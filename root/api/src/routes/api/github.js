const express = require('express');
const router = express.Router();

const githubController = require('../../controllers/githubController');

// @route  GET api/github/commits
// @desc   get all commits
// @access Public
router.get(
	'/commits',
    githubController.get_commits
);

// @route  POST api/auth/create_commits
// @desc   create commits
// @access Public
router.put(
	'/create_commits',
	githubController.create_commits
);

// @route  POST api/github/create_students
// @desc   create students
// @access Public
router.post(
	'/create_students',
	githubController.create_students
);

module.exports = router;