import React, { useState, useCallback } from "react";
import * as Styled from "./App.styles";
import { RightPanel } from "./RightPanel/RightPanel";
import { MainPanel } from "./MainPanel/MainPanel";
import { ICardProps } from "./components/Card";
import { MOCKED_CARDS_DATA } from "./constants/mockedCardsData";
import { ICard } from "./typings/card";

function App() {
  const [data, setData] = useState<ICard[]>(MOCKED_CARDS_DATA);
  const [draftData, setDraftData] = useState<ICard[]>([]);

  const handleDropInDraft = (dropedItem: { id: ICard["id"] }) => {
    const cardData = data.find((card) => card.id === dropedItem.id);

    if (cardData) {
      const updatedDraftData = [...draftData, cardData];

      setData((actualData) =>
        actualData.filter((card) => card.id !== dropedItem.id)
      );

      setDraftData((actualData) => [...actualData, cardData]);

      return cardData;
    }
  };

  return (
    <Styled.Page>
      <MainPanel data={data} />

      <RightPanel onDrop={handleDropInDraft} data={draftData} />
    </Styled.Page>
  );
}

export default App;
