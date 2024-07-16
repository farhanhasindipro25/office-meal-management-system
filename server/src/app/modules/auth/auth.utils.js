import jwt from "jsonwebtoken";
import config from "../../config/index.js";

function jwtHelper(user) {
  const payload = {
    id: user.id,
    email: user.email,
    role_id: user.role_id,
    role_name: user.role_name,
    phone: user.phone,
    gender: user.gender,
    employee_id: user.employee_id,
    is_banned: user.is_banned,
  };
  const accessToken = jwt.sign(payload, config.access_token_secret, {
    expiresIn: config.access_token_expiration_time,
  });
  const refreshToken = jwt.sign(payload, config.refresh_token_secret, {
    expiresIn: config.refresh_token_expiration_time,
  });
  return { accessToken, refreshToken };
}

export const AuthUtils = { jwtHelper };
