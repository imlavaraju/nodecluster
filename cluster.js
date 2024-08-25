const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length; // Number of CPU cores

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for Replica Set 1
  for (let i = 0; i < 1; i++) {
    cluster.fork({ REPLICA_SET: "1" });
  }

  // Fork workers for Replica Set 2
  for (let i = 0; i < 1; i++) {
    cluster.fork({ REPLICA_SET: "2" });
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  require("./server"); // Your server file
}
