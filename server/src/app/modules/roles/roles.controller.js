import { RolesServices } from "./roles.services.js";

const addRole = async (req, res) => {
  const { name } = req.body;
  try {
    await RolesServices.addRoleToDB(name);
    res.status(201).json({
      status: 201,
      message: "Added user role",
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
    const result = await RolesServices.readRolesFromDB();
    res.status(200).json({
      status: 200,
      message: "Roles data retrieved.",
      data: {
        roles: result.rows,
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
