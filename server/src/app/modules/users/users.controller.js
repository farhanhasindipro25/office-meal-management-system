import { UsersServices } from "./users.services.js";
import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  const { user_name, employee_id, email, phone, gender, password, role_id } =
    req.body;
  try {
    const emailAlreadyExists = await UsersServices.checkEmailExistsInDB(email);
    if (emailAlreadyExists.rows.length > 0) {
      return res.status(400).json({
        status: 400,
        message: "An account with this email already exists",
      });
    }
    const password_hashed = await bcrypt.hash(password, 10);
    await UsersServices.addUserToDB(
      user_name,
      employee_id,
      email,
      phone,
      gender,
      password_hashed,
      role_id
    );
    res.status(201).json({
      status: 201,
      message: "Added new user",
      data: {
        user: {
          user_name: user_name,
          employee_id: employee_id,
          email: email,
          phone: phone,
          gender: gender,
          role_id: role_id,
        },
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

const getUsers = async (req, res) => {
  try {
    const result = await UsersServices.readUsersFromDB();
    res.status(200).json({
      status: 200,
      message: "Users data retrieved.",
      data: {
        users: result.rows,
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

const getUserById = async (req, res) => {
  const userID = req.params.id;
  try {
    const result = await UsersServices.readUserByIdFromDB(userID);

    res.status(200).json({
      status: 200,
      message: "User data retrieved.",
      data: {
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

const editUser = async (req, res) => {
  const userID = req.params.id;
  const { user_name, employee_id, email, phone, gender, role_id } = req.body;
  try {
    const result = await UsersServices.updateUserInDB(
      user_name,
      employee_id,
      email,
      phone,
      gender,
      role_id,
      userID
    );
    res.status(201).json({
      status: 201,
      message: "User information updated.",
      data: {
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

const banUser = async (req, res) => {
  const userID = req.params.id;
  const { is_banned } = req.body;
  try {
    await UsersServices.banUserInDB(is_banned, userID);
    if (is_banned === true) {
      res.status(201).json({
        status: 201,
        message: "User has been banned.",
        data: {
          banned_user: userID,
        },
      });
    }
    res.status(201).json({
      status: 201,
      message: "User's ban has been lifted.",
      data: {
        banned_user: userID,
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

export const UsersController = {
  addUser,
  getUsers,
  getUserById,
  editUser,
  banUser,
};
