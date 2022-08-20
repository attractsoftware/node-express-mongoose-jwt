const exress = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = exress();
app.use(exress.json());
app.use(exress.urlencoded({ extended: false }));

//routes
//app.use("/api/users", require("./src/routes/userRouter"));

require("./src/routes")(app);

const port = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URL)
  .then((rs) => {
    app.listen(port, () => console.log("server Started "));
  })
  .catch((err) => console.log(err));
