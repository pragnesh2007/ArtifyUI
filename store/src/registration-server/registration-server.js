const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, "userss.json");

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const userData = { email, password };

  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading user data", err: err });
    }

    const users = JSON.parse(data);

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered", existingUser: existingUser });
    }

    users.push(userData);

    fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing user data" });
      }

      // Sending the updated user data back to the client
      return res.status(200).json({ message: "Registration successful", users: users });
    });
  });
});

app.get("/getUsersData", (req, res) => {
  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading user data", err: err });
    }

    const users = JSON.parse(data);
    return res.status(200).json(users);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading user data", err: err });
    }

    const users = JSON.parse(data);

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Successful login
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Wrong credentials. Please try again." });
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`User Registration Server is running on port ${PORT}`);
});
