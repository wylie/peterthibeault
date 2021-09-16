import React from "react";
import PropTypes from "prop-types";

import Feeling from "../feeling";

import { StyledList, StyledListitem } from "./styled.js";

const List = ({ data, theme }) => {
  return (
    <StyledList data-element="list" theme={theme}>
      {data.map((item, index) => (
        <StyledListitem data-element="list-item" key={index} theme={theme}>
          <Feeling theme={theme} type={item.type} />
        </StyledListitem>
      ))}
    </StyledList>
  );
};

List.displayName = "List";

List.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default List;
