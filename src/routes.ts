import { Router } from "express";
import { userController } from "./controllers/userControllers";

export const router = Router();

router.get("/", userController.UserGet);
router.post("/", userController.UserPost);
router.delete("/:id", userController.UserDelete);
