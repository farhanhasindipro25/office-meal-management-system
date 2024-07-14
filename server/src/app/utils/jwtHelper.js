import jwt from "jsonwebtoken";
import config from "../config/index.js";

function jwtHelper(user) {
  const accessToken = jwt.sign(user, config.access_token_secret, {
    expiresIn: config.access_token_expiration_time,
  });
  const refreshToken = jwt.sign(user, config.refresh_token_secret, {
    expiresIn: config.refresh_token_expiration_time,
  });
  return { accessToken, refreshToken };
}

export default jwtHelper;
