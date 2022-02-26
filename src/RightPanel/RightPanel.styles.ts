import styled from "styled-components";

export const Wrapper = styled.div<{ isOver: boolean }>`
  width: 20%;
  background-color: ${({ isOver }) =>
    isOver ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.5)"};
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
`;

export const CardWrapper = styled.div`
  margin-bottom: 12px;
`;
