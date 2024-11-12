import express from "express";
import { complainPost } from "../controllers/complainController.js";

const complainRouter = express.Router();

// complainRouter.get("/", complainGet);

complainRouter.post("/", complainPost);

export default complainRouter;
