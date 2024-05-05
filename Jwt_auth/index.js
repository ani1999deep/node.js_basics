// server.js
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const secretKey = "your_secret_key";

app.use(bodyParser.json());

// Dummy users database
const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
  },
];

// Login route
app.post("/login", (req, res) => {
  // Check if username and password are provided
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Check if the user exists in the database
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    secretKey,
    { expiresIn: "1h" }
  );

  // Send the token in the response
  res.json({ token });
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route" });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
