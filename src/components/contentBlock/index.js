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
          <p children={item.date_entered} />
          {/* <img src={item.image_src} alt="" /> */}
          {/* <img src={require(item.image_src)} alt="" /> */}
          <img src={`${process.env.PUBLIC_URL}/img/studio/${item.image_src}.jpg`} alt="" />
        </Div>
      ))}
      {works.entries.map(item => (
        <Div key={item.id}>
          {item.workname}
          <img src={`${process.env.PUBLIC_URL}/img/works/${item.image_src}.jpg`} alt="" />
        </Div>
      ))}
    </>
  )
};

export default ContentBlock;
