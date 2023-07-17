import User from "../models/userModel";

// Signup new user
const userSignUp = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    return res
      .status(201)
      .json({ success: true, message: "User signed up", user: newUser });
  } catch (err) {
    return res.status(401).json({ success: true, message: err.messages });
  }
};
