const express = require("express");
const router = express.Router();

const { Register, Login, Trans, fiveTrans, getTrans } = require("../controllers/controllers");

router.post("/register", Register);

router.post("/login", Login);

router.post("/transaction", Trans);

router.get("/fivetransaction/:user_id", fiveTrans);

router.get("/getTrans/:user_id", getTrans);

module.exports = router;
