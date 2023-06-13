const express = require("express");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const jobs = require("./utils/job");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");
const { BINDING_KEY } = require("./config/serverConfig");
const EmailService = require("./services/email-service");

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  const channel = await createChannel();
  await subscribeMessage(channel, EmailService.subscribeEvents, BINDING_KEY);

  app.listen(PORT, async () => {
    console.log("Server Started At Port", PORT);
    // jobs();
  });
};

setupAndStartServer();
