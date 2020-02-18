const router = require("express").Router();
const orderController = require("../../controllers/orderController");


router.route("/")
  .post(orderController.create)

router.route("/:id")
.get(orderController.findAll)

module.exports = router;