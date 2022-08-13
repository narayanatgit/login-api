const express = require("express");
const Book = require("../models/Book");
const BookRoutes = express.Router();
const asyncHandler = require("express-async-handler");
const authMiddleware = require("../utils/verifyToken");
BookRoutes.post(
	"/",
authMiddleware,
	asyncHandler(async (req, res) => {
		const userId = req.user._id;
		const book = await Book.create(
			{
				title: req.body.title,
				category: req.body.category,
				author:req.body.author,
				createdBy:userId

			}
		);
		if (book) {
			res.status(200);
			res.json(book);
		} else {
			res.status(500);
			throw new Error("book creating failed");
		}
	})
);

BookRoutes.get(
	"/",
	asyncHandler(async (req, res) => {
		const book = await Book.find({});
		if (book) {
			res.status(200);
			res.json(book);
		} else {
			res.status(500);
			throw new Error("book getting failed");
		}
	})
);
BookRoutes.put('/:id', asyncHandler(async (req, res) =>
{
  const book = await Book.findById(req.params.id)
  if (book) {
		const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(200);
		res.json(updateBook);
	} else {
		res.status(500);
		throw new Error("update failed");
	}

}))


BookRoutes.delete('/:id', asyncHandler(async (req, res) =>
{
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200)
    res.json(book)
 
  } catch (error) {
    res.json(error)
  }
 
}))
module.exports = BookRoutes;
