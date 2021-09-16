import React from "react";
import PropTypes from "prop-types";

import { Heading } from "./styled.js";

const Divider = ({ text = "" }) => {
  return (
    <Heading children={text} className="Divider_text" data-element="divider-text" />
  );
};

Divider.propTypes = {
  text: PropTypes.string
};

export default Divider;
