const express = require("express");
const boardController = require("../controllers/boardController");
const router = express.Router();

// http://localhost:5000/api/boards
router
	.route("/")
	.get(boardController.getAllBoards)
	.post(boardController.createBoard);

// http://localhost:5000/api/boards/cro-team
router
	.route("/:slug")
	.get(boardController.getOneBoard)
	.delete(boardController.deleteBoard);

module.exports = router;
