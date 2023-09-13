import { db } from "../database/database.connection";
import { Game, createGameType, rowCountType } from "../protocols/game-protocol";

function getGames() {
  return db.query<Game>(`SELECT * FROM games;`);
}

function createGame(game: createGameType) {
  const { title, platform } = game;
  return db.query(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [title, platform]);
}

//ele pode ate retornar mais que o rowCount, mas eu quero somente ele, então nao há problemas em usar o tipo rowCountType ao inves da queryResult
async function getGameByTitleAndPlatform(game: createGameType): Promise<rowCountType> {
  const { title, platform } = game;
  return await db.query(`SELECT * FROM games WHERE title = $1 AND platform = $2;`, [title, platform]);
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;