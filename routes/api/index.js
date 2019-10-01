const router = require("express").Router();
const productRoutes = require("./products");
const cartRoutes = require("./cart")

// Book routes
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
