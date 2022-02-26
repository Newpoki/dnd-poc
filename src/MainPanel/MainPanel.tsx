import * as Styled from "./MainPanel.styles";
import { Card } from "../components/Card";
import { ICard } from "../typings/card";

type IMainPanelProps = {
  data: Array<ICard>;
};

export const MainPanel = ({ data }: IMainPanelProps) => {
  return (
    <Styled.Wrapper>
      <Styled.CardList>
        {data.map((cardData) => {
          return <Card {...cardData} key={cardData.id} />;
        })}
      </Styled.CardList>
    </Styled.Wrapper>
  );
};
