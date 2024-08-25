const fs = require("fs");
const { promisify } = require("util");
const taskQueue = require("../queues/taskQueue");

// Task function that logs task completion to a file
const task = async (user_id) => {
  try {
    const logEntry = `${user_id} - task completed at - ${new Date().toISOString()}\n`;
    await promisify(fs.appendFile)("task_log.txt", logEntry);
    console.log(logEntry);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
};

// Add task to the queue
const queueTask = async (user_id) => {
  await taskQueue.add({ user_id });
};
// Define the process function for the Bull queue
taskQueue.process(async (job) => {
  const { user_id } = job.data;
  await task(user_id);
});
// Export functions
module.exports = {
  task,
  queueTask,
};
