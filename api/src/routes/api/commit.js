const express = require('express');
const router = express.Router();

const commitController = require('../../controllers/commitController');

// @route  GET api/auth
// @desc   Test route
// @access Public
router.get(
	'/',
    commitController.get_commit
);

// @route  POST api/auth
// @desc   Authenticate user * get token
// @access Public
// The auth checks the token to verify it -middleware
router.post(
	'/',
	commitController.post_commit
);

module.exports = router;