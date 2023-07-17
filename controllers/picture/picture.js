import Picture from "../../models/pictureModel.js";
import User from "../../models/userModel.js";

const getAllPictures = async (req, res) => {
  try {
    const allPictures = await Picture.find();

    return res.status(200).json({
      success: true,
      message: "List of Pictures",
      pictures: allPictures,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

// Adds a new picture to DB
const addPicture = async (req, res) => {
  try {
    const newPic = new Picture(req.body);

    // Check is the author exists
    const author = await User.find({ username: req.body.username });
    if (author.length == 0) throw Error("Author doesn't exist");

    // Save the picture
    await newPic.save();

    return res
      .status(201)
      .json({ success: true, message: "New Picture Added", picture: newPic });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

// Get a particular picture
const getParticularPicture = async (req, res) => {
  try {
    const foundPicture = Picture.findById(req.params.pictureId);

    // Picture not found
    if (!foundPicture) throw Error();

    return res.status(200).json({ success: true, picture: foundPicture });
  } catch (err) {
    return res
      .status(404)
      .json({ success: false, message: "Picture not found" });
  }
};

export { getAllPictures, addPicture, getParticularPicture };
