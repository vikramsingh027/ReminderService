const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  BINDING_KEY: process.env.BINDING_KEY,
};
