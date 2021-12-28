const mongoose = require("mongoose");
const slugify = require("slugify");

const { Schema } = mongoose;

const BoardSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
			minlength: 3,
			trim: true,
		},
		slug: { type: String, unique: true },
	},
	{ timestamps: true }
);

// to make Slug field that has the same value with board name
BoardSchema.pre("validate", function (next) {
	this.slug = slugify(this.name, { lower: true, strict: true });
	next();
});

const Board = mongoose.model("Board", BoardSchema);

module.exports = Board;
