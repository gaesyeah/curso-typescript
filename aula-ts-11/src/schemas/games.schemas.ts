import Joi from "joi";
import { createGameType } from "protocols/game-protocol";

export const gamesSchema = Joi.object<createGameType>({
  title: Joi.string().required(),
  platform: Joi.string().required()
});