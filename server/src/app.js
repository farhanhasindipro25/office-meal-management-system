import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import config from "./app/config/index.js";
import apiRoutes from "./app/routes/index.js";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", apiRoutes);

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.listen(config.port, () =>
  console.log(`App listening to port ${config.port}`)
);

export default app;
