// importing modules
import express from "express";
import { AboutController } from "../controllers/about.controller";

// initializing the router
export const router = express.Router();

// add about us route
router.post("/", AboutController.addAbout);

// get about us text
router.get("/", AboutController.getAllAbout);

// get single about us text
router.get("/:id", AboutController.getAbout);

// update about us text
router.put("/:id", AboutController.updateAbout);

// delete about us text
router.delete("/:id", AboutController.deleteAbout);