import Picture from "../../models/pictureModel.js";

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

const addPicture = async (req, res) => {
  try {
    const newPic = new Picture(req.body);
    await newPic.save();

    return res
      .status(201)
      .json({ success: true, message: "New Picture Added", picture: newPic });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

export { getAllPictures, addPicture };
