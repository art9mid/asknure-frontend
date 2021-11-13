export type Question = {
  id: string;
  title: string;
  username: string | null;
  dateCreated: string;
  answersCount: string | number;
};

type Answer = {
  username: string | null;
  text: string;
  dateCreated: string;
};
