import { ReactNode } from "react";
import * as Styled from "./Card.styles";

export type ICardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: ICardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Wrapper>
  );
};
