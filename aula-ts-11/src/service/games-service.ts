import gamesRepository from "../repository/games-repository";
import { createGameType } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: createGameType) {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: createGameType) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result.rowCount > 0 ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;