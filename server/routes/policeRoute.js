import express from "express";
import {
  policeDelete,
  policeGet,
  policeGetById,
  policePut,
} from "../controllers/policeController.js";

const policeRouter = express.Router();

policeRouter.get("/", policeGet);
policeRouter.get("/:id", policeGetById);
policeRouter.put("/:id", policePut);
policeRouter.delete("/:id", policeDelete);
export default policeRouter;
