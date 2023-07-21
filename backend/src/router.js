const express = require("express");

const router = express.Router();
const {
  hashPassword,
  verifyPasswordAndGenerateToken,
  verifyToken,
} = require("./services/auth");

const chartControllers = require("./controllers/chartControllers");
const usersControllers = require("./controllers/usersControllers");

router.get("/users", verifyToken, usersControllers.browse);

router.post(
  "/login",
  usersControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPasswordAndGenerateToken
);

router.get("/account/favoris", verifyToken);

router.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});
router.get("/charts", chartControllers.browse);
router.get("/charts/:id", chartControllers.read);
router.post("/users", hashPassword, usersControllers.add);

router.put("/users/:id", hashPassword, usersControllers.edit);
router.get("/users/:id", verifyToken, usersControllers.read);
router.delete("/users/:id", verifyToken, usersControllers.destroy);

router.put("/charts/:id", verifyToken, chartControllers.edit);
router.delete("/charts/:id", verifyToken, chartControllers.destroy);
router.post("/charts", verifyToken, chartControllers.add);

module.exports = router;
