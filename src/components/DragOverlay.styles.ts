import styled from "styled-components";

export const Wrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px;
`;

export const Message = styled.p<{ borderColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: ${({ borderColor }) => `2px dashed ${borderColor}`};
  padding: 12px;
  flex-direction: column;
`;
