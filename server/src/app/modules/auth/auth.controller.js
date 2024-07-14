import bcrypt from "bcrypt";
import { AuthServices } from "./auth.services.js";
import jwtHelper from "../../utils/jwtHelper.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await AuthServices.LOGIN_USER(email);
    if (result.rows.length === 0) {
      res.status(401).json({
        status: 401,
        message: "An account with this email does not exist",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      result.rows[0].password
    );

    if (!validPassword)
      res.status(401).json({
        status: 401,
        message: "Incorrect Password",
      });

    let tokens = jwtHelper(result.rows[0]);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.status(201).json(tokens);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const AuthController = {
  loginUser,
};
