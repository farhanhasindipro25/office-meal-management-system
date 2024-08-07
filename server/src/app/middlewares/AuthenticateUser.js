import jwt from "jsonwebtoken";
import config from "../config/index.js";

const authenticateUser = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: 401, message: "Unauthorized: Access Token Not Found" });
  }

  jwt.verify(token, config.access_token_secret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ status: 401, message: "Unauthorized: Invalid Access Token" });
    }
    req.user = decoded;
    next();
  });
};

export default authenticateUser;
