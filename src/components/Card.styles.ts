import styled from "styled-components";

export const Wrapper = styled.div<{ isDragging: boolean }>`
  background-color: white;
  padding: 8px 16px;
  height: 200px;
  flex: 0 1 30%;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  border-radius: 12px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.p`
  margin-bottom: 16px;
  font-family: "Roboto";
  font-size: 20px;
`;
