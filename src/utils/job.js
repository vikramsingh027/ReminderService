const cron = require("node-cron");

const emailService = require("../services/email-service");
const transporter = require("../config/emailConfig");

const setupJobs = async () => {
  await cron.schedule("*/2 * * * *", async () => {
    const tickets = await emailService.fetchPendingEmails();
    tickets.forEach((ticket) => {
      transporter
        .sendMail({
          to: ticket.recepientEmail,
          subject: ticket.subject,
          text: ticket.content,
        })
        .then(async (data) => {
          console.log(data);
          await emailService.update(ticket.id, { status: "SUCCESS" });
        });
    });
  });
};

module.exports = setupJobs;
