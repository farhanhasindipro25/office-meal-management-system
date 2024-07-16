import bcrypt from "bcrypt";
import { AuthServices } from "./auth.services.js";
import { AuthUtils } from "./auth.utils.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await AuthServices.loginUser(email);
    if (!email || !password) {
      res.status(400).json({
        status: 400,
        message: "Email and password are required!",
      });
    }
    if (result.rows.length === 0) {
      res.status(401).json({
        status: 401,
        message: "Unauthorized: An account with this email does not exist.",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      result.rows[0].password
    );

    if (!validPassword)
      res.status(401).json({
        status: 401,
        message: "Unauthorized: Incorrect Password.",
      });

    let tokens = AuthUtils.jwtHelper(result.rows[0]);
    res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.status(201).json({
      status: 201,
      message: "Login successful",
      data: {
        tokens: tokens,
        user: result.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getRefreshToken = async (req, res) => {
  const { refresh_token } = req.cookies;
  if (!refresh_token) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized: Refresh Token Not Found.",
    });
  }

  try {
    const { valid, decoded, error } = await AuthServices.verifyRefreshToken(
      refresh_token
    );
    if (!valid) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized: Invalid Refresh Token.",
        error: error,
      });
    }

    const newAccessToken = AuthUtils.jwtHelper(decoded).accessToken;
    return res.status(201).json({
      status: 201,
      message: "New access token generated",
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const AuthController = {
  loginUser,
  getRefreshToken,
};
