const express = require("express");
const router = express.Router();
const { Posts, Likes } = require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  try {
    const listOfPosts = await Posts.findAll({ include: [Likes] });
    const likedPosts = [];
    if (req.user) { likedPosts = await Likes.findAll({ where: { UserId: req.user.id } }); }
    res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.get("/byId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /byId): ', e.message)
  }
});

router.get("/byuserId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const listOfPosts = await Posts.findAll({
      where: { UserId: id },
      include: [Likes],
    });
    res.json(listOfPosts);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /byuserId): ', e.message)
  }
});

router.post("/", validateToken, async (req, res) => {
  try {
    const post = req.body;
    post.username = req.user.username;
    post.UserId = req.user.id;
    await Posts.create(post);
    res.json(post);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(post /): ', e.message)
  }
});

router.put("/title", validateToken, async (req, res) => {
  try {
    const { newTitle, id } = req.body;
    await Posts.update({ title: newTitle }, { where: { id: id } });
    res.json(newTitle);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(put /title): ', e.message)
  }
});

router.put("/content", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ content: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(put /content): ', e.message)
  }
});

router.put("/category", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ category: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image0", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ image0: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image1", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ image1: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image2", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ image2: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.put("/image3", validateToken, async (req, res) => {
  try {
    const { newText, id } = req.body;
    await Posts.update({ image3: newText }, { where: { id: id } });
    res.json(newText);
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(get /): ', e.message)
  }
});

router.delete("/:postId", validateToken, async (req, res) => {
  try {
    const postId = req.params.postId;
    await Posts.destroy({
      where: {
        id: postId,
      },
    });
    res.json("DELETED SUCCESSFULLY");
  }
  catch (e) {
    console.log('Error happend while connecting to the DB(delete /:postId): ', e.message)
  }
});

module.exports = router;


