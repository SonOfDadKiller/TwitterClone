const express = require('express');
const router = express.Router();
const { posts } = require("../models");

router.get("/", async (request, response) => {
    const listOfPosts = await posts.findAll();
    response.json(listOfPosts);
});

router.post("/", async (request, response) => {
    const post = request.body;
    await posts.create(post);
    response.json(post);
});


module.exports = router;