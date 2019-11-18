const router = require("express").Router();
const bookRoutes = require("./bookRoute");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
