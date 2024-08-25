const { RateLimiterRedis } = require("rate-limiter-flexible");
const redisClient = require("./redisClient");

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 20, // Allow 20 requests per user per minute
  duration: 60, // Duration of rate limiting in seconds (1 minute)
  keyPrefix: "rate-limit",
});

module.exports = rateLimiter;
