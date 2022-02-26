import * as Styled from "./RightPanel.styles";
import { useDrop } from "react-dnd";
import { DND_TYPES } from "../constants/dndTypes";
import { ICard, ICardItem } from "../typings/card";
import { Card } from "../components/Card";

type IRightPanelProps = {
  onDrop: (item: ICardItem) => void;
  data: Array<ICard>;
};

export const RightPanel = ({ onDrop, data }: IRightPanelProps) => {
  const [{ isOver, dropedCard }, drop] = useDrop(() => ({
    accept: DND_TYPES.CARD,
    drop: (item: ICardItem) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      dropedCard: monitor.getItem(),
    }),
    canDrop: (item: ICardItem) => {
      return item.status === "READY";
    },
  }));

  return (
    <Styled.Wrapper ref={drop} isOver={isOver}>
      <Styled.Title>The draft</Styled.Title>

      {data.map((card) => {
        return (
          <Styled.CardWrapper>
            <Card {...card} key={card.id} />
          </Styled.CardWrapper>
        );
      })}
    </Styled.Wrapper>
  );
};
