const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// routes
const taskRoutes = require("./routes/taskRoutes");
const boardRoutes = require("./routes/boardRoutes");

const app = express();

//connect DB
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected to db sccessfully");
	})
	.catch((err) => {
		console.log(err);
	});
// to avoid CORS errors after sending data to frontend
app.use(cors());
// to make data readable as json data
app.use(express.json());

// Routes
app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
