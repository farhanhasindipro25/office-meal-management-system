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
      message: "Successfuly added new user",
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

export const UsersController = {
  addUser,
};
