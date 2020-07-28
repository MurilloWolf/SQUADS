import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
	name: String,
	desc: String,
	createDate: String,
	updateDate: String,
	markedDate: String,
	open: Boolean,
});

export default mongoose.model("Task", TaskSchema);
