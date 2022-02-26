import * as Styled from "./MainPanel.styles";
import { Card } from "../components/Card";
import { ICard, ICardItem } from "../typings/card";
import { useDrop } from "react-dnd";
import { DND_TYPES } from "../constants/dndTypes";
import { DragOverlay } from "../components/DragOverlay";

type IMainPanelProps = {
  data: Array<ICard>;
  onDrop: (item: ICardItem) => void;
};

export const MainPanel = ({ data, onDrop }: IMainPanelProps) => {
  const [{ isOver, draggedCard, canDrop }, drop] = useDrop(() => ({
    accept: DND_TYPES.CARD,
    drop: (item: ICardItem) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      draggedCard: monitor.getItem(),
      canDrop: monitor.canDrop(),
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

      {/* Only displaying if a card is getting dragged and isn't a READY card */}
      {(canDrop || isOver) && draggedCard?.status !== "READY" && (
        <DragOverlay canDrop={canDrop} isOver={isOver} />
      )}
    </Styled.Wrapper>
  );
};
