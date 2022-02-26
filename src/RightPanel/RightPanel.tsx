import * as Styled from "./RightPanel.styles";
import { useDrop } from "react-dnd";
import { DND_TYPES } from "../constants/dndTypes";
import { ICard } from "../typings/card";
import { Card } from "../components/Card";

type IRightPanelProps = {
  onDrop: (item: { id: ICard["id"] }) => void;
  data: Array<ICard>;
};

export const RightPanel = ({ onDrop, data }: IRightPanelProps) => {
  const [{ isOver, dropedCard }, drop] = useDrop(() => ({
    accept: DND_TYPES.CARD,
    drop: (item: { id: ICard["id"] }) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      dropedCard: monitor.getItem(),
    }),
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
