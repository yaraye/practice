const router = require("express").Router();
const memberRoutes = require("./members");

// member routes
router.use("/members", memberRoutes);

module.exports = router;