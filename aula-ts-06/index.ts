//péssima pratica, verboso e inviavel para receber manutenção por conta escalabilidade e repetição de código, o exercicio 07 resolve isso

const game: {
  id: number | string,
  platform: {
      id: number | string,
      name: string
  }
  title: string,
  publisher: string,
  launch?: Date | string
} = {
  id: 1,
  platform: {
      id: 1,
      name: "Playstation"
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games: {
  id: number | string,
  platform: {
      id: number | string,
      name: string
  }
  title: string,
  publisher: string,
  launch?: Date | string
}[] = [game];

function play(game: {
  id: number | string,
  platform: {
      id: number | string,
      name: string
  }
  title: string,
  publisher: string,
  launch?: Date | string
}){
  // runs the game
  console.log(game);
}

console.log(play(games[0]));