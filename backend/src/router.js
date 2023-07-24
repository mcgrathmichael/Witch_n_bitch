const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPasswordAndGenerateToken,
  verifyToken,
} = require("./services/auth");

const usersControllers = require("./controllers/usersControllers");

router.get("/users", verifyToken, usersControllers.browse);

router.post(
  "/login",
  usersControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPasswordAndGenerateToken
);

router.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

router.post("/users", hashPassword, usersControllers.add);

router.put("/users/:id", hashPassword, usersControllers.edit);
router.get("/users", verifyToken, usersControllers.browse);
router.get("/users/:id", verifyToken, usersControllers.read);
router.delete("/users/:id", verifyToken, usersControllers.destroy);

module.exports = router;
