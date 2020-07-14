const mongoose = require("mongoose");

const diamondSchema = new mongoose.Schema({
  criteria: {
    novelty: String,
    technology: String,
    complexity: String,
    pace: String,
  },
});

const recommendationSchema = new mongoose.Schema({
  diamond: [diamondSchema],
  description: {
    type: String,
  },
});

mongoose.model("Recommendation", recommendationSchema);
