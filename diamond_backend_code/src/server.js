require("./models/User");
require("./models/Project");
require("./models/Recommendation");
require("./models/Image");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const imageRoutes = require("./routes/imageRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(projectRoutes);
app.use(recommendationRoutes);
app.use(imageRoutes);

const mongoUri =
  "mongodb+srv://hamza:Tigerfish23@cluster0-egqj9.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongodb");
});

//allow user to access this if user has logged in successfully/have valid token-->using middleware here!
app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is: ${req.user.email}`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on 3000...");
});
