import React from "react";
import styled from "styled-components";

import data from "../../data/data.js"

const { news, studio, works } = data;

const Div = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

const ContentBlock = () => {
  return (
    <>
      {news.entries.map(item => (
        <Div key={item.id}>
          {item.description}
        </Div>
      ))}
      {studio.entries.map(item => (
        <Div key={item.id}>
          <img src={item.image_src} alt="" />
        </Div>
      ))}
      {works.entries.map(item => (
        <Div key={item.id}>
          {item.workname}
        </Div>
      ))}
    </>
  )
};

export default ContentBlock;
