import React from "react";
import styled from "styled-components";

import data from "../../data/wylie_thibeault.json"

const Div = styled.div`
  color: red;
`;

// console.log(data);

const Wrap = ({children}) => {
  return (
    <Div>{children}</Div>
  )
};

export default Wrap;
