const router = require("express").Router();
const productRoutes = require("./products");
const cartRoutes = require("./cart");
const orderRoutes = require("./order");

router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);


module.exports = router;
