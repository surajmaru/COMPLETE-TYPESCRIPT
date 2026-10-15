const userName = "Suraj";

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: "easy",
  minLevel: 12,
  didStart: false,
  players: ["player1", "player2"],
};

type Settings = typeof settings;

function loadData(settings: Settings) {
  //
}

loadData(settings);
