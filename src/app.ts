import express from "express";
import apiRoutes from "./routes/api.routes";
import { config } from "./config/env";

const app = express();

app.use(express.json());
app.use("/api", apiRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
