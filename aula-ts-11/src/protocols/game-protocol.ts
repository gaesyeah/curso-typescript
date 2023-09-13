export type Game = {
  id: number,
  title: string;
  platform: string;
}

export type createGameType = Omit<Game, 'id'>;

export type rowCountType = {
  rowCount: number
};

type queryResult = {
  rows: Game[] | createGameType[],
  rowCount: number
};