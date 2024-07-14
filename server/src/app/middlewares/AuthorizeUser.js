import jwt from "jsonwebtoken";
import config from "../config/index.js";

const AuthorizeUser = (roles = []) => {
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: Invalid Access Token.",
      });
    }

    try {
      const decoded = jwt.verify(token, config.access_token_secret);
      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role_name)) {
        return res.status(403).json({
          status: 403,
          message:
            "Forbidden: You do not have permission to access this resource.",
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: Invalid Access Token.",
        error: error.message,
      });
    }
  };
};

export default AuthorizeUser;
