import styled from "styled-components";

export const Wrapper = styled.div<{ isDragging: boolean }>`
  background-color: white;
  padding: 8px 16px;
  height: 200px;
  flex: 0 1 30%;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`;

export const Title = styled.p`
  margin-bottom: 8px;
`;
