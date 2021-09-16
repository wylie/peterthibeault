import styled from "styled-components";

export const StyledWrap = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  margin: auto;
  @media (min-width: 600px) {
    & {
      width: 75%;
    }
  }

`;
