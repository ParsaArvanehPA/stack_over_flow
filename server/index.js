const config = require("config");
const express = require("express");
const userAuth = require("./routes/user_auth_route");
//////////////////////

const app = express();
const port = config.get("PORT");
app.use(require("./middleware/body_parsers"));

////////////////////// DEFINING ROUTES

app.use("/user-auth", userAuth);

////////////////////// INITIALIZING SERVER

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//////////////////////
