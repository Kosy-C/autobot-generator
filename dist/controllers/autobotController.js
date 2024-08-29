"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsComments = exports.getAutobotsPosts = exports.getAutobots = void 0;
const autobot_1 = require("../models/autobot");
const posts_1 = require("../models/posts");
const comments_1 = require("../models/comments");
const getAutobots = async (req, res) => {
    try {
        const autobots = await autobot_1.AutobotInstance.findAll({ limit: 10 });
        return res.json(autobots);
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server error",
            err,
            route: "/autobots"
        });
    }
};
exports.getAutobots = getAutobots;
const getAutobotsPosts = async (req, res) => {
    try {
        const autobotId = req.params.autobotId;
        const posts = await posts_1.PostInstance.findAll({ where: { autobotId }, limit: 10 });
        return res.json(posts);
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server error",
            route: "/autobotsPost"
        });
    }
};
exports.getAutobotsPosts = getAutobotsPosts;
const getPostsComments = async (req, res) => {
    try {
        const postId = req.query.postId;
        const comments = await comments_1.CommentInstance.findAll({ where: { postId }, limit: 10 });
        res.json(comments);
    }
    catch (err) {
        res.status(500).json({
            Error: "Internal server error",
            route: "/postsComments"
        });
    }
};
exports.getPostsComments = getPostsComments;
