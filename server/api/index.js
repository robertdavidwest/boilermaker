const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/dummy", require("./dummy"));

router.use((req, res, next) => {
  const error = new Error("Not Found.");
  error.status = 404;
  next(err);
});

module.exports = router;
