const AuthorizeUser = (roles = []) => {
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: User information not found.",
      });
    }

    try {
      if (roles.length && !roles.includes(req.user.role_name)) {
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
