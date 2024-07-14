import { RolesServices } from "./roles.services.js";

const addRole = async (req, res) => {
  const { name } = req.body;
  try {
    await RolesServices.ADD_ROLE_TO_DB(name);
    res.status(201).json({
      status: 201,
      message: "Successfully added user role",
      data: {
        role: name,
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

const getRoles = async (req, res) => {
  try {
    const result = await RolesServices.READ_ROLES_FROM_DB();
    res.status(200).json({
      status: 200,
      message: "Roles data retrieved successfully.",
      data: {
        role: result.rows,
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

export const RolesController = {
  addRole,
  getRoles,
};
