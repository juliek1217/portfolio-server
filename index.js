const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const postRouter = require("./routes/Posts");
const commentsRouter = require("./routes/Comments");
const commentsProjectsRouter = require("./routes/CommentsProjects");
const usersRouter = require("./routes/Users");
const likesRouter = require("./routes/Likes");
const likesProjectsRouter = require("./routes/LikesProjects");
const projectRouter = require("./routes/Projects");
const db = require("./models");

app.use(express.json());
app.use(cors());

// to solve cors issue
app.all('/*', function (req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "X-Requested-With"); next(); });

// Routers
app.use("/auth", usersRouter);
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);
app.use("/likes", likesRouter);
app.use("/projects", projectRouter);
app.use("/commentsprojects", commentsProjectsRouter);
app.use("/likesprojects", likesProjectsRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
