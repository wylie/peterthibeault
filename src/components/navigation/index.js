import React from "react";
import styled from "styled-components";

import data from "../../data/wylie_thibeault.json"

const Div = styled.div`
  padding: 0 1rem;
  background-color: #39264d;
  border-width: 0 10px 0 0;
  border-style: solid;
  border-color: #ffffff1a;
`;
const Ul = styled.ul`
  text-align: right;
  list-style-type: none;
  text-transform: capitalize;
`;
const Li = styled.li`
  padding: 5px 5px 5px 0;
  &:hover {
    background-color: #ffffff40;
  }
`;
const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <Div>
      <h2 class="sub-heading">
        <nobr>Peter R. Thibeault</nobr><br />
        <nobr>Thibeault: DESIGN</nobr>
      </h2>
      <Ul>
        {data.map(item => (
          <Anchor href="#">
            <Li key={item.name}>
              {item.name}
            </Li>
          </Anchor>
        ))}
      </Ul>
    </Div>
  )
};

export default Navigation;
