"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autobotController_1 = require("../controllers/autobotController");
const autobotController_2 = require("../controllers/autobotController");
const autobotController_3 = require("../controllers/autobotController");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const autobotService_1 = require("../services/autobotService");
const router = express_1.default.Router();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per `window` (here, per minute)
});
router.get("/autobots", limiter, autobotController_1.getAutobots);
router.get("/postsComments", limiter, autobotController_3.getPostsComments);
router.get("/autobotsPosts/:autobotId", limiter, autobotController_2.getAutobotsPosts);
router.post("/create", autobotService_1.createAutobots);
exports.default = router;
