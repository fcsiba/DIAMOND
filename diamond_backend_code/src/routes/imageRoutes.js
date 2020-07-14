const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const Image = mongoose.model("Image");
const router = express.Router();

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
    //console.log(file);
  },
});

const upload = multer({
  storage: storage,
}).single("imageDesc");

router.use(express.static("./public"));

router.post("/images", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(422).send({ error: err.message });
    } else {
      //console.log(req.file);
      try {
        const newImage = new Image({
          userId: req.user._id,
          imageDesc: req.file,
        });
        const imageData = newImage.imageDesc; //this variable has stored image information which can be used in future
        console.log(imageData);
        newImage
          .save()
          .then(() => res.json("Image added."))
          .catch((e1) => res.status(422).send({ error: e1.message }));
      } catch (e) {
        res.status(422).send({ error: e.message });
      }
    }
  });
});

router.get("/images", async (req, res) => {
  const images = await Image.find({ userId: req.user._id });
  res.send(images[0].imageDesc.path);
  
});

module.exports = router;
