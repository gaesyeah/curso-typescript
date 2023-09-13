import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import './database/database.connection';
import { schemaValidation } from "./middlewares/schemaValidation.middleware";
import { Game } from "./protocols/game-protocol";
import { gamesSchema } from "./schemas/games.schemas";
import gamesService from "./service/games-service";

const app = express();
app.use(json());

app.post("/games", schemaValidation(gamesSchema), async (req: Request, res: Response) => {
  const body = req.body as Game;
  try {
    await gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", async (req: Request, res: Response) => {
  const { rows } = await gamesService.getGames();
  res.send(rows);
});

app.listen(5000, () => console.log(`Server is up and running on port 5000`));