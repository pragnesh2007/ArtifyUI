const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://ecommerce-frontend-ui.azurewebsites.net');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const userData = { email, password };

  fs.readFile("ecommerce/store/src/userss.json", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading user data" });
    }

    const users = JSON.parse(data);

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    users.push(userData);

    fs.writeFile("ecommerce/store/src/userss.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing user data" });
      }

      return res.status(200).json({ message: "Registration successful" });
    });
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`User Registration Server is running on port ${PORT}`);
});
