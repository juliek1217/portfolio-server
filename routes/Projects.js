const express = require("express");
const router = express.Router();
const { Projects, LikesProjects } = require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  try {
    const listOfPosts = await Projects.findAll({ include: [LikesProjects] });
    const likedPosts = [];
    if (req.user) { likedPosts = await LikesProjects.findAll({ where: { UserId: req.user.id } }); }
    res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.get("/byId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Projects.findByPk(id);
    res.json(post);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.get("/byuserId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const listOfPosts = await Projects.findAll({
      where: { UserId: id },
      include: [LikesProjects],
    });
    res.json(listOfPosts);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.post("/", validateToken, async (req, res) => {
  try {
    const post = req.body;
    post.username = req.user.username;
    post.UserId = req.user.id;
    await Projects.create(post);
    res.json(post);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/title", validateToken, async (req, res) => {
  try {
    const { newTitle, id } = req.body;
    await Projects.update({ title: newTitle }, { where: { id: id } });
    res.json(newTitle);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/category", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ category: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/tech", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ tech: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image0", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ image0: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image1", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ image1: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image2", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ image2: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image3", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ image3: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/link", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Projects.update({ link: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/description", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ description: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.delete("/:postId", validateToken, async (req, res) => {
  try {
    const postId = req.params.postId;
    await Projects.destroy({
      where: {
        id: postId,
      },
    });
    res.json("DELETED SUCCESSFULLY");
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

module.exports = router;
