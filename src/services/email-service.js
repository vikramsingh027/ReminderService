const transporter = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const ticketRepo = new TicketRepository();

const sendBasicMail = async function (
  mailFrom = "",
  mailTo,
  mailSubject,
  mailText
) {
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

const subscribeEvents = async function (payload) {
  const service = payload.service;
  const data = payload.data;
  switch (service) {
    case "CREATE_TICKET":
      await create(data);
      break;
    case "SEND_BASIC_MAIL":
      await sendBasicMail(data.recepientEmail, data.subject, data.content);
      break;
    default:
      console.log("No valid event received");
      break;
  }
};

module.exports = {
  sendBasicMail,
  create,
  fetchPendingEmails,
  update,
  subscribeEvents,
};
