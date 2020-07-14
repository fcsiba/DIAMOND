const mongoose = require("mongoose");

const diamondSchema = new mongoose.Schema({
  criteria: {
    novelty: String,
    technology: String,
    complexity: String,
    pace: String,
  },
});

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  projectName: {
    type: String,
    default: "",
  },
  projectDescription: {
    type: String,
    default: "",
  },
  projectBudget: {
    type: String,
    default: ""
  },
  projectDuration: {
    ttype: String,
    default: ""
  },
  industry: {
    type: String,
  },
  companyName: {
    type: String,
  },
  numberOfEmployees: {
    type: String,
    default: ""
  },
  diamond: [diamondSchema],
});

mongoose.model("Project", projectSchema);
