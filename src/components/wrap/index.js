import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 1180px;
`;

const Wrap = ({children}) => {
  return (
    <Div>
      {children}
    </Div>
  )
};

export default Wrap;
