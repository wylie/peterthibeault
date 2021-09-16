import React from "react";
import PropTypes from "prop-types";

import { StyledFeeling } from "./styled.js";


const Feeling = ({ theme = "", type = "" }) => {
  return <StyledFeeling
    data-element={theme === "primary" ? "feeling" : "feeling-small" }
    theme={theme}
    $type={type}
  >
    {type}
  </StyledFeeling>;
};

Feeling.displayName = "Feeling";

Feeling.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  type: PropTypes.string
};

export default Feeling;
