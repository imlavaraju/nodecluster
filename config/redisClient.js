const { createClient } = require("redis");

const redisClient = createClient();

redisClient.on("error", (err) => console.error("Redis Client Error", err));

redisClient
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch((err) => console.error("Failed to connect to Redis", err));

module.exports = redisClient;
