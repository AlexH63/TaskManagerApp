const mongoose = require("mongoose");

const taskSchema = ({
    userId: String,
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", taskSchema);