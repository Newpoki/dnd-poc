import * as Styled from "./MainPanel.styles";
import { Card } from "../components/Card";
import { ICard, ICardItem } from "../typings/card";
import { useDrop } from "react-dnd";
import { DND_TYPES } from "../constants/dndTypes";

type IMainPanelProps = {
  data: Array<ICard>;
  onDrop: (item: ICardItem) => void;
};

export const MainPanel = ({ data, onDrop }: IMainPanelProps) => {
  const [{ isOver, dropedCard }, drop] = useDrop(() => ({
    accept: DND_TYPES.CARD,
    drop: (item: ICardItem) => {
      console.log({ item });
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      dropedCard: monitor.getItem(),
    }),
    canDrop: (item: ICardItem) => {
      return item.status === "DRAFT";
    },
  }));

  return (
    <Styled.Wrapper ref={drop}>
      <Styled.CardList>
        {data.map((cardData) => {
          return <Card {...cardData} key={cardData.id} />;
        })}
      </Styled.CardList>
    </Styled.Wrapper>
  );
};
