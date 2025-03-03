const Bookmark = require('../models/Bookmark');
const Post = require('../models/Post');
const { CustomError } = require('../middlewares/error');

const addBookmark = async (req, res, next) => {
  try {
    console.log("addBookmark called");
    const { postId } = req.body;
    const userId = req.user._id;

    const existingBookmark = await Bookmark.findOne({ userId, postId });
    if (existingBookmark) {
      throw new CustomError('Post already bookmarked!', 400);
    }

    const bookmark = new Bookmark({ userId, postId });
    const savedBookmark = await bookmark.save();

    res.status(201).json(savedBookmark);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getBookmarks = async (req, res, next) => {
  try {
    console.log("getBookmarks called");
    const userId = req.user._id;
    const bookmarks = await Bookmark.find({ userId }).populate('postId');

    res.status(200).json(bookmarks);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  addBookmark,
  getBookmarks
};