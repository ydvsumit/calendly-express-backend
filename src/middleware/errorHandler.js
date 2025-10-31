module.exports = (err, req, res, next) => {
  console.error(err);
  const status = err.response?.status || 500;
  const message = err.response?.data || err.message || "Internal Server Error";
  res.status(status).json({ error: message });
};
