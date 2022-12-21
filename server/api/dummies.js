const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    // do stuff
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    // do stuff
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    // do stuff
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    // do stuff
  } catch (error) {
    next(error);
  }
});

module.exports = router;
