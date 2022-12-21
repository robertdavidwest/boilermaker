const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/dummies", require("./dummies"));

router.use((req, res, next) => {
  const error = new Error("Not Found.");
  error.status = 404;
  next(err);
});

module.exports = router;
