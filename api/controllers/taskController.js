const Board = require("../models/boardModel");
const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res, next) => {
	const slug = req.params.slug;
	try {
		const board = await Board.findOne({ slug });
		const boardId = board._id;
		const tasks = await Task.find({ boardId });
		const doneTasks = await Task.find({ status: "Done", boardId });
		const inProgressTasks = await Task.find({ status: "InProgress", boardId });
		const todoTasks = await Task.find({ status: "Todo", boardId });
		const backlogTasks = await Task.find({
			status: "Backlog",
			boardId: boardId,
		});

		return res.status(200).json({
			status: "success",
			boardId,
			result: tasks.length,
			data: {
				Done: {
					name: "Done",
					result: doneTasks.length,
					items: doneTasks,
				},
				inProgress: {
					name: "in Progress",
					items: inProgressTasks,
					result: inProgressTasks.length,
				},
				Todo: { name: "Todo", result: todoTasks.length, items: todoTasks },
				Backlog: {
					name: "Backlog",
					result: backlogTasks.length,
					items: backlogTasks,
				},
			},
		});
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

exports.getOneTask = async (req, res, next) => {
	const slug = req.params.slug;
	try {
		const task = await Task.findOne({ slug });
		if (task) {
			res.status(200).json({ status: "success", data: { task } });
		} else {
			res.status(500).json({
				status: "failed",
				data: `Task with Slug: ${slug} is not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

exports.createTask = async (req, res, next) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ status: "success", data: { task } });
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

exports.updateTask = async (req, res, next) => {
	const slug = req.params.slug;
	try {
		const task = await Task.findOneAndUpdate({ slug }, req.body.status, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({ status: "success", data: { task } });
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};

exports.deleteTask = async (req, res, next) => {
	const slug = req.params.slug;
	try {
		const task = await Task.findOne({ slug });
		if (task) {
			await Task.deleteOne({ slug });
			return res.status(200).json({ status: "success" });
		} else {
			res.status(500).json({
				status: "failed",
				data: `Task with Slug: ${slug} is not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ status: "failed", error });
	}
};
