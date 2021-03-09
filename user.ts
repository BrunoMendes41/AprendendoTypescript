type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "bruno",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "bruno",
  level: 100,
};

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: "brunno",
  nickname: "bru",
  level: 12,
};
