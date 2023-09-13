import { db } from "../database/database.connection";
import { Game, createGameType } from "../protocols/game-protocol";

function getGames() {
  return db.query<Game>(`SELECT * FROM games;`);
}

function createGame(game: createGameType) {
  const { title, platform } = game
  return db.query(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [title, platform]);
}

function getGameByTitleAndPlatform(game: createGameType) {
  const { title, platform } = game
  return db.query(`SELECT * FROM games WHERE title = $1 AND platform = $2;`, [title, platform]);
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;