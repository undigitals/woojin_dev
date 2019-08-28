const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const gravatar = require("gravatar");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "email already exists" });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200", // Size
          r: "pg", // Rating
          d: "mm" // Default
        });
        const newUser = new User({
          name: req.body.name,
          username: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => res.json(user));
          });
        });
      }
    })
    .catch(err => console.log(err + " (last catch)"));
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }
  const { email } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(isMatch => {
            if (isMatch) {
              /// User matched
              const payload = {
                id: user.id,
                name: user.name,
                username: user.username,
                avatar: user.avatar
              };
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) {
                    console.log(err);
                  }
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              errors.password = "Password incorrect";
              return res.status(400).json(errors);
            }
          })
          .catch(err => console.log(err + " (bcrypt)"));
      }
    })
    .catch(err => console.log(err + " (last catch)"));
});

router.get(
  "/play",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const avatar = gravatar.url(req.user.email, {
      s: "200", // Size
      r: "pg", // Rating
      d: "mm"
    });

    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar
    });
  }
);

module.exports = router;
