const axios = require("axios");
const { calendly } = require("../config");

const client = axios.create({
  baseURL: calendly.baseUrl,
  headers: {
    Authorization: `Bearer ${calendly.apiKey}`,
    "Content-Type": "application/json",
  },
});

module.exports = client;
