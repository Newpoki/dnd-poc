import { ReactNode, memo } from "react";
import * as Styled from "./Card.styles";
import { DND_TYPES } from "../constants/dndTypes";
import { useDrag } from "react-dnd";
import { ICard, ICardItem } from "../typings/card";

export type ICardProps = ICard;

export const Card = memo(({ id, title, shortDesc, status }: ICardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DND_TYPES.CARD,
    item: { id, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Styled.Wrapper ref={drag} isDragging={isDragging}>
      <Styled.Title>{title}</Styled.Title>
      {shortDesc}
    </Styled.Wrapper>
  );
});
