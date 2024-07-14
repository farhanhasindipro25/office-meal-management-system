import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.ENVIRONMENT,
  port: process.env.PORT,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
  access_token_expiration_time: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
  refresh_token_expiration_time: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
};
