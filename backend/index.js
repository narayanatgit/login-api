const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const error = require("./middleware/errorHandling");
const dbConnect = require("./config/dbConnect");
const BookRoutes = require("./routes/BookRoute");
const { requireSignin } = require("./utils/verifyToken");
const port = process.env.PORT;
//db connect
dbConnect();

app.use(cors());
app.use(express.json());
//routes

app.use("/api/users", userRoutes);

app.use(error.errorHandling);

app.use("/api/books/",  BookRoutes);

//servers
app.listen(port, () => {
	console.log(port);
});
