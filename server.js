const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use("/api/v1", taskRoutes);

const PORT = process.env.PORT || 3000;
const REPLICA_SET = process.env.REPLICA_SET || "1";

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} (Replica Set ${REPLICA_SET})`)
);
