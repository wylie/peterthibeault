import React from "react";
import styled from "styled-components";

import data from "../../data/wylie_thibeault.json"

const Ul = styled.ul`
  color: red;
`;
const Li = styled.li`
  color: red;
`;

const Navigation = () => {
  return (
    <Ul>
      {data.map(item => (
        <Li key={item.name}>
          {item.name}
        </Li>
      ))}
    </Ul>
  )
};

export default Navigation;
