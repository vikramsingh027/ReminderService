const transporter = require("../config/emailConfig");

const sendBasicMail = async function (mailFrom, mailTo, mailSubject, mailHTML) {
  try {
    await transporter.sendMail({
      from: `support Team 😎 ${mailFrom}`,
      to: mailTo,
      subject: mailSubject,
      html: mailHTML,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicMail,
};
