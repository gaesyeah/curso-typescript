export type Game = {
  id: number,
  title: string;
  platform: string;
}

export type createGameType = Omit<Game, 'id'>;