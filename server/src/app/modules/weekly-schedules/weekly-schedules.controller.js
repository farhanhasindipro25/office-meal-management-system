import { SchedulesServices } from "./weekly-schedules.services.js";

const addSchedule = async (req, res) => {
  const { working_day } = req.body;
  try {
    await SchedulesServices.ADD_SCHEDULE_TO_DB(working_day);
    res.status(201).json({
      status: 201,
      message: "Added new schedule",
      data: {
        schedule: {
          working_day: working_day,
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

const getSchedules = async (req, res) => {
  try {
    const result = await SchedulesServices.READ_SCHEDULE_FROM_DB();
    res.status(200).json({
      status: 200,
      message: "Schedules data retrieved.",
      data: {
        schedule: result.rows,
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
export const SchedulesController = {
  addSchedule,
  getSchedules,
};
