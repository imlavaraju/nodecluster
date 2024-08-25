const Queue = require("bull");
const redisClient = require("../config/redisClient");

const taskQueue = new Queue("taskQueue", {
  redis: {
    port: 6379,
    host: "127.0.0.1",
    // This is optional, use only if needed
    // password: 'your_redis_password',
  },
});

module.exports = taskQueue;
