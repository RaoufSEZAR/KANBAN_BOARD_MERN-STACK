const Board = require("../models/boardModel");
const Task = require("../models/taskModel");

exports.createBoard = async (req, res, next) => {
	try {
		const board = await Board.create(req.body);
		res.status(201).json({ status: "success", board });
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

exports.getAllBoards = async (req, res, next) => {
	try {
		const boards = await Board.find();

		if (boards.length > 0) {
			return res.status(200).json({
				status: "success",
				result: boards.length,
				boards,
			});
		}

		// if server work but there is no board
		res.status(200).json({
			status: "success",
			result: boards.length,
			data: { message: `There is No Board yet` },
		});
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

// inested call by id calling by Slug
exports.getOneBoard = async (req, res, next) => {
	const slug = req.params.slug;
	try {
		const board = await Board.findOne({ slug });
		if (board) {
			return res.status(200).json({ status: "success", board });
		}
		res.status(500).json({
			status: "failed",
			data: `Board with slug: ${slug} is not found`,
		});
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

exports.deleteBoard = async (req, res, next) => {
	const slug = req.params.slug;
	try {
		const board = await Board.findOne({ slug });
		if (board) {
			// before delete Board delete all Cards which have the same board id
			await Task.deleteMany({ boardId: board._id });
			await Board.deleteOne({ slug });
			return res.status(200).json({ status: "success" });
		}
		res.status(500).json({
			status: "failed",
			data: `board with slug: ${slug} is not found`,
		});
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};
