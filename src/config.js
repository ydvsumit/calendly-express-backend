const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  calendly: {
    apiKey: process.env.CALENDLY_API_KEY,
    baseUrl: process.env.CALENDLY_BASE_URL || "https://api.calendly.com",
  },
};
