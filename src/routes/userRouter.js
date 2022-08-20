const router = require("express").Router();
const { addUserValidator } = require("../middlewares/userValidator");
const { addUser, login } = require("../controllers/userController");

router.post("/", addUserValidator, addUser);
router.post("/login", login);

module.exports = router;
