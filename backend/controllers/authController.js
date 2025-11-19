const User = require('../models/User'); // ⚠️ Make sure your file is named User.js (Singular) in the models folder!
const bcrypt = require('bcryptjs');

// @desc    Register a new user
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role, phone, enumber, dob } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { enumber }] });
    if (existingUser) {
      return res.status(400).json({ error: "User with this Email or E-Number already exists." });
    }

    const newUser = new User({ username, email, password, role, phone, enumber, dob });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// @desc    Login user & get token
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    console.log("--- Login Request Received ---");
    console.log("Body:", req.body); 

    // 1. ROBUST EXTRACTION:
    // We check for 'identifier' first. If it's missing, we check for 'email'.
    // This ensures it works even if the frontend is sending the old format.
    const identifier = req.body.identifier || req.body.email;
    const password = req.body.password;

    if (!identifier || !password) {
      console.log("❌ Missing identifier or password");
      return res.status(400).json({ error: "Please provide both username/email and password" });
    }

    // 2. Search for user by Email OR Username
    const user = await User.findOne({ 
      $or: [
        { email: identifier }, 
        { username: identifier }
      ] 
    });

    if (!user) {
      console.log("❌ User not found for identifier:", identifier);
      return res.status(400).json({ error: "Invalid username/email or password" });
    }

    console.log("✅ User found:", user.username);

    // 3. Check password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Password incorrect for:", user.username);
      return res.status(400).json({ error: "Invalid username/email or password" });
    }

    console.log("✅ Login Successful!");
    
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        enumber: user.enumber
      }
    });

  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };