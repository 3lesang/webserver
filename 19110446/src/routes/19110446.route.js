const router = require("express").Router();
const { findById, insert } = require('../controllers/19110446.controller')

router.post("/", insert);
router.get("/:id", findById);

module.exports = router;
