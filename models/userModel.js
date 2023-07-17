import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "Username already taken"],
    minLength: [2, "Username should be of minimum 3 length"],
    maxLength: [30, "Username should be of maximum 30 length"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already registered"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password should be of minimum 8 length"],
  },
  fullName: String,
  status: String,
});

export default mongoose.model("User", userSchema);
