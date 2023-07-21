const argon2 = require("@node-rs/argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPasswordAndGenerateToken = (req, res, next) => {
  argon2
    .verify(req.users.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.users.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        delete req.users.hashedPassword;

        res.cookie("token", token, {
          maxAge: 15 * 60 * 1000,
          httpOnly: false,
          sameSite: "None",
          secure: true,
        });

        res.send({
          users: {
            id: req.users.id,
            username: req.users.username,
            admin: req.users.admin,
          },
        });
      } else {
        res.sendStatus(401);
      }
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const { token } = req.cookies; // Récupérer le token à partir du cookie
    if (!token) {
      throw new Error("Token is missing");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Vérifier et décoder le token

    req.userId = decodedToken.sub; // Récupérer l'ID de l'utilisateur à partir du token décodé

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPasswordAndGenerateToken,
  verifyToken,
};
