const express = require("express");
const router = express.Router();

const { Register, Login, Trans, fiveTrans, getTrans, summary } = require("../controllers/controllers");

router.post("/register", Register);

router.post("/login", Login);

router.post("/transaction", Trans);

router.get("/summary/:user_id",summary)

router.get("/fivetransaction/:user_id", fiveTrans);

router.get("/getTrans/:user_id", getTrans);

module.exports = router;
