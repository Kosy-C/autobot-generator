import { Request, Response } from "express";
import { AutobotInstance } from "../models/autobot";
import { PostInstance } from "../models/posts";
import { CommentInstance } from "../models/comments";

export const getAutobots = async(req:Request, res:Response) => {
    try{
        const autobots = await AutobotInstance.findAll({ limit: 10 });
        return res.json(autobots);
    } catch(err) {
        res.status(500).json({
            Error: "Internal server error", 
            err,
            route: "/autobots"
        })
    }
}

export const getAutobotsPosts = async(req:Request, res:Response) => {
    try{
        const autobotId = req.params.autobotId
        const posts = await PostInstance.findAll({ where: { autobotId }, limit: 10 });
        return res.json(posts);
    } catch(err) {
        res.status(500).json({
            Error: "Internal server error", 
            route: "/autobotsPost"
        })
    }
}

export const getPostsComments = async(req:Request, res:Response) => {
    try{
        const postId = req.query.postId as string;
        const comments = await CommentInstance.findAll({ where: { postId }, limit: 10 });
        res.json(comments);
    } catch(err) {
        res.status(500).json({
            Error: "Internal server error", 
            route: "/postsComments"
        })
    }
};