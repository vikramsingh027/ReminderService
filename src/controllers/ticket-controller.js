const emailService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await emailService.create(req.body);
    return res.status(201).json({
      message: "Successfully created a ticket",
      success: true,
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Not able to create ticket",
      success: false,
      data: {},
      err: error,
    });
  }
};

module.exports = {
  create,
};
