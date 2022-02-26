import styled from "styled-components";
import * as StyledCard from "../components/Card.styles";
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const CardList = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;

  ${StyledCard.Wrapper} {
    margin-bottom: 12px;
    flex: 0 1 45%;

    @media (min-width: 900px) {
      flex: 0 1 30%;
    }

    @media (min-width: 1300px) {
      flex: 0 1 18%;
    }
  }
`;
