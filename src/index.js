const express = require("express");

const { PORT } = require("./config/serverConfig");
const { sendBasicMail } = require("./services/email-service");

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log("Server Started At Port", PORT);

    await sendBasicMail(
      "support@admin.com",
      "keyur.np@somaiya.edu, akshar.parmar@somaiya.edu, v.rajput@somaiya.edu",
      "Testing Reminder Service",
      "<h2><center><i> Airline System </i></center></h2> \n <p>Hey! How are you, I hope you like our support...</p> \n <b>Keep learning backend from <font color='olive'>Sanket Singh<font></b>"
    );
  });
};

setupAndStartServer();
