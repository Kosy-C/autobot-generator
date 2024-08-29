"use strict";
// import axios from "axios";
// import { AutobotInstance } from "../models/autobot";
// import { PostInstance } from "../models/posts";
// import { CommentInstance } from "../models/comments";
// import { Request, Response } from "express";
// import { v4 as uuidv4 } from "uuid";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAutobots = void 0;
// export const createAutobots = async (req: Request, res: Response) => {
//     try {
//         // Fetch 10 Autobots
//         const autobots = (
//             await axios.get("https://jsonplaceholder.typicode.com/users")
//         ).data;
//         const createdAutobots = [];
//         // Generate and save 500 Autobots
//         for (let i = 0; i < 500; i++) {
//             const baseAutobot = autobots[i % 10]; // Cycle through the 10 users
//             // Create a new Autobot with unique fields
//             const autobot = await AutobotInstance.create({
//                 id: i + 1,
//                 name: `${baseAutobot.name} ${i + 1}`,
//                 email: `autobot${i + 1}@example.com`,
//                 phone: `${baseAutobot.phone} ${i + 1}`,
//                 username: `${baseAutobot.username}_${i + 1}`,
//                 website: `${baseAutobot.website} ${i + 1}`,
//             });
//             for (let j = 0; j < 10; j++) {
//                 const post = (
//                     await axios.get("https://jsonplaceholder.typicode.com/posts")
//                 ).data[j];
//                 await PostInstance.create({
//                     id: i + 1,
//                     title: post.title,
//                     // title: `${post.title} - ${AutobotInstance.id}`,
//                     body: post.body,
//                     autobotId: post.autobotId
//                 });
//                 for (let k = 0; k < 10; k++) {
//                     const comment = (
//                         await axios.get("https://jsonplaceholder.typicode.com/comments")
//                     ).data[k];
//                     await CommentInstance.create({
//                         id: comment.id,
//                         name: comment.name,
//                         email: comment.email,
//                         body: comment.body,
//                         postId: PostInstance.id,
//                     });
//                 }
//             }
//             // Add the newly created autobot to the array
//             createdAutobots.push(autobot);
//         }
//             return res.json(createdAutobots);
//     } catch (err) {
//         console.log("Error", err);
//     }
// };
// setInterval(createAutobots, 3600000); // Runs every hour
const axios_1 = __importDefault(require("axios"));
const autobot_1 = require("../models/autobot");
const posts_1 = require("../models/posts");
const comments_1 = require("../models/comments");
const uuid_1 = require("uuid");
const createAutobots = async (req, res) => {
    try {
        // Fetch 10 Autobots and 100 Posts and 100 Comments to use as templates
        const autobotsData = (await axios_1.default.get("https://jsonplaceholder.typicode.com/users")).data;
        const postsData = (await axios_1.default.get("https://jsonplaceholder.typicode.com/posts")).data;
        const commentsData = (await axios_1.default.get("https://jsonplaceholder.typicode.com/comments")).data;
        const createdAutobots = [];
        // Generate and save 500 Autobots
        for (let i = 0; i < 500; i++) {
            const baseAutobot = autobotsData[i % 10]; // Cycle through the 10 template users
            // Create a new Autobot with unique fields
            const autobot = await autobot_1.AutobotInstance.create({
                id: (0, uuid_1.v4)(), // Use UUID for unique ID generation
                name: `${baseAutobot.name} ${i + 1}`,
                email: `autobot${i + 1}@example.com`,
                phone: `${baseAutobot.phone} ${i + 1}`,
                username: `${baseAutobot.username}_${i + 1}`,
                website: `${baseAutobot.website} ${i + 1}`,
            });
            // Create 10 unique posts for each Autobot
            for (let j = 0; j < 10; j++) {
                const basePost = postsData[j % 10]; // Cycle through the 10 template posts
                // Create a unique post title by appending the Autobot's ID and index
                const post = await posts_1.PostInstance.create({
                    id: (0, uuid_1.v4)(), // Use UUID for unique ID generation
                    title: `${basePost.title} - Autobot ${autobot.id} - Post ${j + 1}`,
                    body: basePost.body,
                    autobotId: autobot.id, // Link post to the Autobot
                });
                // Create 10 unique comments for each post
                for (let k = 0; k < 10; k++) {
                    const baseComment = commentsData[k % 10]; // Cycle through the 10 template comments
                    await comments_1.CommentInstance.create({
                        id: (0, uuid_1.v4)(), // Use UUID for unique ID generation
                        name: baseComment.name,
                        email: baseComment.email,
                        body: baseComment.body,
                        postId: post.id, // Link comment to the Post
                    });
                }
            }
            // Add the newly created autobot to the array
            createdAutobots.push(autobot);
        }
        return res.json(createdAutobots);
    }
    catch (err) {
        console.log("Error", err);
        res.status(500).json({ error: "Failed to create autobots" });
    }
};
exports.createAutobots = createAutobots;
setInterval(exports.createAutobots, 3600000); // Runs every hour
