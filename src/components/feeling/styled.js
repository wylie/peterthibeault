import styled, { css } from "styled-components";

const ChooseFeeling = ({ theme, $type }) => {
  switch ($type) {
    case "excited":
      return css`
        background-color: #ec7b28;
        border: 5px solid #b86120;
        color: #fff;
      `;
    case "tender":
      return css`
        background-color: #f014e8;
        border: 5px solid #af1eaa;
        color: #fff;
      `;
    case "scared":
      return css`
        background-color: #e5df43;
        border: 5px solid #beb93c;
        color: #fff;
      `;
    case "angry":
      return css`
        background-color: #e80d0d;
        border: 5px solid #b60b0b;
        color: #fff;
      `;
    case "sad":
      return css`
        background-color: #5185cc;
        border: 5px solid #3f679e;
        color: #fff;
      `;
    case "happy":
      return css`
        background-color: #3ea34a;
        border: 5px solid #2a6d32;
        color: #fff;
      `;
  default:
      return ``;
  }
};

export const StyledFeeling = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  ${props =>
  props.theme === "secondary" ?
    css`
      font-size: 0;
    `
    :
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  ${props => ChooseFeeling(props)};
`;
