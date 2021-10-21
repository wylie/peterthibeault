import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  color: red;
`;
const Li = styled.li`
  color: red;
`;

const Wrap = () => {
  return (
    <Ul>
      <Li>one</Li>
    </Ul>
  )
};

export default Wrap;
