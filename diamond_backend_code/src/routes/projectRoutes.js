const express = require("express");

const mongoose = require("mongoose");

const requireAuth = require("../middlewares/requireAuth");

const Project = mongoose.model("Project");
const Recommendation = mongoose.model("Recommendation");
const router = express.Router();

router.use(requireAuth);

//finding projects of single user
router.get("/projects", async (req, res) => {
  const projects = await Project.find({ userId: req.user._id });
  res.send(projects);
});

//finding all projects
router.get("/allProjects", async (req, res) => {
  const allProjects = await Project.find();
  res.send(allProjects);
});

router.post("/projects", async (req, res) => {
  const {
    projectName,
    projectDescription,
    projectBudget,
    projectDuration,
    industry,
    companyName,
    numberOfEmployees,
    diamond,
  } = req.body;
  console.log(diamond);

  const [projectDiamond] = diamond;

  const { criteria } = projectDiamond;

  if (
    !projectName ||
    !projectDescription ||
    !projectBudget ||
    !projectDuration ||
    !industry ||
    !companyName ||
    !numberOfEmployees ||
    !diamond
  ) {
    return res.status(422).send({ error: "Must provide all project details" });
  }

  try {
    const project = new Project({
      projectName,
      projectDescription,
      projectBudget,
      projectDuration,
      industry,
      companyName,
      numberOfEmployees,
      diamond,
      userId: req.user._id,
    });

    const recommendation = await Recommendation.find({
      "diamond.criteria": criteria,
    });
    const projectsWithSameDiamond = await Project.find({
      "diamond.criteria": criteria,
    });
    //console.log("Projects with same diamond\n", projectsWithSameDiamond);
    const projectsWithSameIndustry = await Project.find({ industry });
    //console.log("Projects with same industry\n", projectsWithSameIndustry);
    await project.save();
    console.log(res);
    /*const [recDiamond] = recommendation;
    const { description } = recDiamond;*/ //that's the recommendation we need!

    //sending description (recommendation), similar projects as response
    //not mandatory because as you can see, already saving similar projects, description in variables
    res.json({
      project,
      projectsWithSameDiamond,
      projectsWithSameIndustry,
      recommendation,
    });
    
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
