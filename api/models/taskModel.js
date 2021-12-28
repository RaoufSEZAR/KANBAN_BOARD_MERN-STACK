const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");

const TaskSchema = new Schema(
	{
		title: {
			type: String,
			unique: true,
			required: true,
			minlength: 3,
			trim: true,
		},
		body: { type: String, required: true, trim: true, minlength: 7 },
		status: {
			type: String,
			enum: ["Backlog", "Todo", "InProgress", "Done"],
			default: "Todo",
		},
		slug: { type: String, unique: true },
		// to make relationship with Board
		boardId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Board",
		},
		color: {
			type: String,
			default: "#fffff",
		},
	},
	{
		timestamps: true,
	}
);
// to make Slug field that has the same value with Task title
TaskSchema.pre("validate", function (next) {
	this.slug = slugify(this.title, { lower: true, strict: true });

	next();
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
