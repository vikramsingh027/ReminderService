const transporter = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const ticketRepo = new TicketRepository();

const sendBasicMail = async function (mailFrom, mailTo, mailSubject, mailText) {
  try {
    await transporter.sendMail({
      from: `support Team 😎 ${mailFrom}`,
      to: mailTo,
      subject: mailSubject,
      text: mailText,
    });
  } catch (error) {
    console.log(error);
  }
};

const create = async function (data) {
  try {
    const ticket = await ticketRepo.create(data);
    return ticket;
  } catch (error) {
    console.log("Something went wrong in service layer", error);
    throw error;
  }
};

const fetchPendingEmails = async function () {
  try {
    const tickets = await ticketRepo.getAll({ status: "PENDING" });
    return tickets;
  } catch (error) {
    console.log("Something went wrong in service layer", error);
    throw error;
  }
};

const update = async function (ticketId, data) {
  try {
    const ticket = await ticketRepo.update(ticketId, data);
    return ticket;
  } catch (error) {
    console.log("Something went wrong in service layer", error);
    throw error;
  }
};

module.exports = {
  sendBasicMail,
  create,
  fetchPendingEmails,
  update,
};
