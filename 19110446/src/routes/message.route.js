const router = require("express").Router();
const { getAll, findById } = require("../controllers/message.controller");

router.get("/", getAll);

router.get("/:id", findById);

module.exports = router;
