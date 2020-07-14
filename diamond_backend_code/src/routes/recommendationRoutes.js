const express = require("express");
const mongoose = require("mongoose");
//const requireAuth = require("../middlewares/requireAuth");
const Recommendation = mongoose.model("Recommendation");
const router = express.Router();
//router.use(requireAuth);
router.post("/recommendations", async (req, res) => {
  const { diamond, description } = req.body;
  if (!diamond || !description) {
    return res.status(422).send({ error: "Must provide all details" });
  }
  try {
    const recommendation = new Recommendation({
      diamond,
      description,
    });

    await recommendation.save();

    res.send(recommendation);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.get("/recommendations", async (req, res) => {
  const recs = await Recommendation.find();
  res.send(recs);
  console.log(recs);
});

module.exports = router;
