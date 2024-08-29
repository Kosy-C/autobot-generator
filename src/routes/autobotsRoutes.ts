import express from "express";
import { getAutobots } from "../controllers/autobotController";
import { getAutobotsPosts } from "../controllers/autobotController";
import { getPostsComments } from "../controllers/autobotController";
import rateLimit from "express-rate-limit";
import { createAutobots } from "../services/autobotService";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per `window` (here, per minute)
});

router.get("/autobots", limiter, getAutobots);
router.get("/postsComments", limiter, getPostsComments);
router.get("/autobotsPosts/:autobotId", limiter, getAutobotsPosts);
router.post("/create", createAutobots);

export default router;
