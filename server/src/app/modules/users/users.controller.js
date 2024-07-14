import { UsersServices } from "./users.services.js";
import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  const { user_name, employee_id, email, phone, gender, password, role_id } =
    req.body;
  try {
    const password_hashed = await bcrypt.hash(password, 10);
    await UsersServices.ADD_USER_TO_DB(
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
    const result = await UsersServices.READ_USERS_FROM_DB();
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

const editUser = async (req, res) => {
  const userID = req.params.id;
  const { user_name, employee_id, email, phone, gender, role_id } = req.body;
  try {
    const result = await UsersServices.UPDATE_USER_IN_DB(
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

export const UsersController = {
  addUser,
  getUsers,
  editUser,
};
