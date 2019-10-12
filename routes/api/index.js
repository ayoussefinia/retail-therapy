const router = require("express").Router();
const productRoutes = require("./products");
const cartRoutes = require("./cart");
// const userRoutes = require("./user");

// Book routes
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
// router.use("/user", userRoutes);

module.exports = router;
