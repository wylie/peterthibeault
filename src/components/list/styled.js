import styled, { css } from "styled-components";

export const StyledList = styled.div`
  display: flex;
  user-select: none;
  list-style-type: none;
  ${props =>
  props.theme === "primary" ?
    css`
      flex-direction: row;
      flex-wrap: wrap;
    `
  :
    css`
      flex-wrap: wrap;
    `};
`;

export const StyledListitem = styled.div`
  ${props =>
  props.theme === "primary" ?
    css`
      flex: 4 4 33%;
      padding: .5rem;
      min-height: 75px;
    `
  :
    css`
      width: 75px;
      height: 75px;
      padding: .5rem;
    `};
`;
