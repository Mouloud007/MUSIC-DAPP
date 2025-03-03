const express = require('express');
const { addBookmark, getBookmarks } = require('../controllers/bookmarkController');
const verifyToken = require('../middlewares/verifyToken'); // Import verifyToken middleware
const router = express.Router();

router.post('/', verifyToken, addBookmark); // Add a bookmark
router.get('/', verifyToken, getBookmarks); // Get bookmarks for the logged-in user

module.exports = router;