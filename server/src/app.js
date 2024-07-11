import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import config from "./app/config/index.js";
import APP_ROUTES from "./app/routes/index.js";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", APP_ROUTES);

app.listen(config.port, () =>
  console.log(`App listening to port ${config.port}`)
);
