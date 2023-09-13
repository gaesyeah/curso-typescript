import controller from "@/controllers/controller";
import { Router } from "express";

const router = Router();
router.get("/", controller.getInfo)

export default router;