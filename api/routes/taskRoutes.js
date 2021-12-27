const express = require("express");
// Controller
const taskController = require("../controllers/taskController");
const statusMiddleware = require("../middleware/statusMiddleware");

const router = express.Router();

// http://localhost:5000/api/tasks/cro-team
router.route("/:slug").get(taskController.getAllTasks);

router.route("/").post(
	// middleware to make sure the status like: ["Backlog", "Todo", "InProgress", "Done"]
	statusMiddleware(["Backlog", "Todo", "InProgress", "Done"]),
	taskController.createTask
);

// http://localhost:5000/api/tasks/slug
router
	.route("/:slug")
	.get(taskController.getOneTask)
	.patch(
		// middleware to make sure the status like: ["Backlog", "Todo", "InProgress", "Done"]
		statusMiddleware(["Backlog", "Todo", "InProgress", "Done"]),
		taskController.updateTask
	)
	.delete(taskController.deleteTask);

module.exports = router;
