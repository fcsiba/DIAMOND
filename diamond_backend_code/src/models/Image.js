const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  imageDesc: {
    type: mongoose.Schema.Types,
  },
});

mongoose.model("Image", imageSchema);
