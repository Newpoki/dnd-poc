import * as Styled from "./RightPanel.styles";
import { useDrop } from "react-dnd";
import { DND_TYPES } from "../constants/dndTypes";
import { ICard, ICardItem } from "../typings/card";
import { Card } from "../components/Card";
import { DragOverlay } from "../components/DragOverlay";

type IRightPanelProps = {
  onDrop: (item: ICardItem) => void;
  data: Array<ICard>;
};

export const RightPanel = ({ onDrop, data }: IRightPanelProps) => {
  const [{ isOver, dropedCard, canDrop }, drop] = useDrop(() => ({
    accept: DND_TYPES.CARD,
    drop: (item: ICardItem) => {
      onDrop(item);
    },
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver(),
        dropedCard: monitor.getItem(),
        canDrop: monitor.canDrop(),
      };
    },
    canDrop: (item: ICardItem) => {
      return item.status === "READY";
    },
  }));

  return (
    <Styled.Wrapper ref={drop}>
      <Styled.Title>The draft</Styled.Title>

      {data.map((card) => {
        return (
          <Styled.CardWrapper>
            <Card {...card} key={card.id} />
          </Styled.CardWrapper>
        );
      })}

      {(canDrop || isOver) && <DragOverlay canDrop={canDrop} isOver={isOver} />}
    </Styled.Wrapper>
  );
};
