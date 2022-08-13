const express = require("express");
const User = require("../models/User");
const userRoutes = express.Router();
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const authMiddleware = require("../utils/verifyToken");

////user routes
userRoutes.post(
	"/register",
	asyncHandler(async (req, res) => {
		const { name, email, password } = req.body;

		const userExist = await User.findOne({ email });
		if (userExist) {
			throw new Error("user exits");
		}
		const user = await User.create({ name, email, password });
		res.json({
			Token: generateToken(user._id),
			_id: user._id,
			name: user.name,
			email: user.email,
			password: user.password,
		});
	})
);
//login
userRoutes.post(
	"/login",
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user && (await user.isPasswordMatch(password))) {
			res.status(200);
			res.json({
				Token: generateToken(user._id),
				_id: user._id,
				name: user.name,
				email: user.email,
				password: user.password,
			});
		} else {
			res.status(401);
			throw new Error("invalid credentials");
		}
	})
);

//update
userRoutes.put("/update", (req, res) => {
	res.send("update");
});

//delete
userRoutes.delete("/delete", (req, res) => {
	res.send("delete");
});
//fetch
userRoutes.get("/delete", (req, res) => {
	res.send("fetch");
});

//profile
userRoutes.get(
	"/profile",
	authMiddleware,
	asyncHandler(async (req, res) => {
		try {
			
			const user = await User.findById(req.user._id).populate("books");
			if (!user) throw new Error("you don t have any profile");
			res.status(302);
			res.send(user);
		} catch (error) {
		   res.status(500)
			throw new Error('server')
		}
		
		
	})
);

module.exports = userRoutes;
