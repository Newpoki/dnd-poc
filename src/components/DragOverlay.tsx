import * as Styled from "./DragOverlay.styles";
import { memo, useMemo } from "react";

type IDragOverlayProps = {
  canDrop: boolean;
  isOver: boolean;
};

export const DragOverlay = memo(({ canDrop, isOver }: IDragOverlayProps) => {
  const { backgroundColor, borderColor } = useMemo(() => {
    if (isOver) {
      return canDrop
        ? {
            backgroundColor: "rgba(153, 189, 153, 1)",
            borderColor: "rgba(255, 255, 255, 0.7)",
          }
        : {
            /* This case should never happen as we're not displaying this component when the drag zone is not compatible with the dragged card */
            backgroundColor: "rgba(197, 137, 137, 1)",
            borderColor: "rgba(255, 255, 255, 0.7)",
          };
    }

    return canDrop
      ? {
          backgroundColor: "white",
          borderColor: "rgba(0, 0, 0, 1)",
        }
      : {
          backgroundColor: "transparent",
          borderColor: "transparent",
        };
  }, [canDrop, isOver]);

  return (
    <Styled.Wrapper backgroundColor={backgroundColor}>
      <Styled.Message borderColor={borderColor}>
        <p>isOver: {isOver.toString()}</p>
        <p>canDrop: {canDrop.toString()}</p>
      </Styled.Message>
    </Styled.Wrapper>
  );
});
