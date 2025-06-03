// Assignment
// AIM: Create a signup, signin and get users route

const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

mongoose.connect("mongodb+srv://sakalyacp:wKy1ruYfg3i3l6vp@cluster0.ueh0k7g.mongodb.net/user_app?retryWrites=true&w=majority");

const User = mongoose.model('Users', {
  name: String,
  email: String,
  password: String
});

app.use(express.json());

app.post("/signup", async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("Email already exists");
  }

  const user = new User({
    name: name,
    email: email,
    password: password
  });

  user.save();
  res.json({
    "msg": "User created successfully"
  });
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({
        msg: "User doesnt exist",
      });
    }
    if (user.password !== password) {
      return res.status(403).json({
        msg: "Invalid password",
      });
    }

    var token = jwt.sign({ email: email }, jwtPassword);
    return res.json({
      token,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const email = decoded.email;
        const users = await User.find({ email: { $ne: email } });
        return res.json(users);
    } catch (err) {
        return res.status(403).json({
        msg: "Invalid token",
        });
    }
});

  
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});