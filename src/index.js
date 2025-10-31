const express = require("express");
const app = express();
const { port } = require("./config");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
