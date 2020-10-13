const express = require("express");
const router = express.Router();

const { Register, Login, Trans, getTrans } = require("../controllers/controllers");

router.post("/register", Register);

router.post("/login", Login);

router.post("/transaction", Trans);

router.get("/getTrans/:user_id", getTrans);

module.exports = router;
