module.exports = (app) => {
  app.use("/api/users", require("../routes/userRouter"));
};
