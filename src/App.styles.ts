import styled from "styled-components";
import * as StyledMainPanel from "./MainPanel/MainPanel.styles";
import * as StyledRightPanel from "./RightPanel/RightPanel.styles";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(to right, #ef8e38, #108dc7);
  flex-direction: column;

  ${StyledRightPanel.Wrapper} {
    min-height: 100px;
  }

  @media (min-width: 900px) {
    flex-direction: row;

    ${StyledMainPanel.Wrapper} {
      width: 80%;
    }

    ${StyledRightPanel.Wrapper} {
      width: 20%;
    }
  }
`;
