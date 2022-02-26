import React, { useState, useCallback } from "react";
import * as Styled from "./App.styles";
import { RightPanel } from "./RightPanel/RightPanel";
import { MainPanel } from "./MainPanel/MainPanel";
import { MOCKED_CARDS_DATA } from "./constants/mockedCardsData";
import { ICard, ICardItem } from "./typings/card";

function App() {
  const [readyCards, setReadyCards] = useState<ICard[]>(MOCKED_CARDS_DATA);
  const [draftCards, setDraftCards] = useState<ICard[]>([]);

  const handleDropInDraft = useCallback(
    (dropedItem: ICardItem) => {
      const cardData = readyCards.find((card) => card.id === dropedItem.id);

      if (cardData) {
        setReadyCards((actualReadyCards) =>
          actualReadyCards.filter((card) => card.id !== dropedItem.id)
        );

        setDraftCards((actualDraftCards) => [
          ...actualDraftCards,
          { ...cardData, status: "DRAFT" },
        ]);
      }
    },
    [readyCards]
  );

  const handleDropInReady = (dropedItem: ICardItem) => {
    const cardData = readyCards.find((card) => card.id === dropedItem.id);

    if (cardData) {
      setDraftCards((actualDraftCards) =>
        actualDraftCards.filter((card) => card.id !== dropedItem.id)
      );

      setReadyCards((actualReadyCards) => [
        ...actualReadyCards,
        { ...cardData, status: "READY" },
      ]);
    }
  };

  return (
    <Styled.Page>
      <MainPanel data={readyCards} onDrop={handleDropInReady} />

      <RightPanel onDrop={handleDropInDraft} data={draftCards} />
    </Styled.Page>
  );
}

export default App;
