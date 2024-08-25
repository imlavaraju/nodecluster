const express = require("express");
const rateLimiter = require("../config/rateLimiter");
const { queueTask } = require("../services/taskService");

const router = express.Router();

router.post("/task", async (req, res) => {
  const { user_id } = req.body;
  try {
    // Consume points from the rate limiter for the user
    await rateLimiter.consume(user_id, 1); // 1 task per second

    // Add the task to the queue
    await queueTask(user_id);

    res.status(200).json({ message: "Task is queued" });
  } catch (rateLimiterRes) {
    res.status(429).json({ error: "Too Many Requests" });
  }
});

module.exports = router;
