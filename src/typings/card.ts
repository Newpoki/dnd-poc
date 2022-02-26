export type ICard = {
  id: string;
  title: string;
  shortDesc: string;
  desc: string;
  status: "DRAFT" | "READY";
};

export type ICardItem = {
  id: ICard["id"];
  status: ICard["status"];
};
