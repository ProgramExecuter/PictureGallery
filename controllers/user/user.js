import User from "../../models/userModel.js";

// Signup new user
const userSignup = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    return res
      .status(201)
      .json({ success: true, message: "User signed up", user: newUser });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

export { userSignup };
