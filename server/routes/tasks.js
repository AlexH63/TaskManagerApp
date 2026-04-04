const router = require("express").Router();
const Task = require("../models/Task");
const verifyToken = require("../middleware/tokenVerifier");

// Create
router.post("/", verifyToken, async (req, res) => {
  const task = new Task({
    userId: req.user.id,
    title: req.body.title,
    description: req.body.description,
    color: req.body.color,
  });

  await task.save();
  res.json(task);
});

// Read
router.get("/", verifyToken, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

// Update
router.put("/:id", verifyToken, async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      color: req.body.color,
    },
    { new: true },
  );
  res.json(updated);
});

// Delete
router.delete("/:id", verifyToken, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
