import { Router } from "express";
import { schemaValidation } from "middlewares/schemaValidation.middleware";
import { musicSchema } from "schemas/music.schemas";
import musicController from "../controllers/music-controller";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", schemaValidation(musicSchema), musicController.createMusic);

export default musicRouter;