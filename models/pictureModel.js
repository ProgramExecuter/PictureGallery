import mongoose from "mongoose";

const pictureSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [2, "Title should be of minimum 3 length"],
    maxLength: [30, "Title should be of maximum 30 length"],
  },
  picUrl: { type: String, required: true },
  username: { type: String, required: [true, "Owner of picture is required"] },
});

export default mongoose.model("Picture", pictureSchema);
