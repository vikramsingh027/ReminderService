const express = require("express");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const jobs = require("./utils/job");
// const { sendBasicMail } = require("./services/email-service");

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log("Server Started At Port", PORT);
    jobs();
    // await sendBasicMail(
    //   "support@admin.com",
    //   "keyur.np@somaiya.edu, akshar.parmar@somaiya.edu, v.rajput@somaiya.edu",
    //   "Testing Reminder Service",
    //   "<h2><center><i> Airline System </i></center></h2> \n <p>Hey! How are you, I hope you like our support...</p> \n <b>Keep learning backend from <font color='olive'>Sanket Singh<font></b>"
    // );
  });
};

setupAndStartServer();
