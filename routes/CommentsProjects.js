const express = require("express");
const router = express.Router();
const { CommentsProjects } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const commentsProjects = await CommentsProjects.findAll({ where: { PostId: postId } });
    res.json(commentsProjects);
});

router.post("/", validateToken, async (req, res) => {
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    await CommentsProjects.create(comment);
    res.json(comment);
});

router.delete("/:commentId", validateToken, async (req, res) => {
    const commentId = req.params.commentId;

    await CommentsProjects.destroy({
        where: {
            id: commentId,
        },
    });

    res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
