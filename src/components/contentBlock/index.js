import React from "react";
import styled, { css } from "styled-components";

import data from "../../data/data.js"

const { news, studio, works } = data;

const Div = styled.div`
  width: 100%;
  border: 10px solid #fead68;
  background-color: #666;
  font-size: 1em;
  padding: 20px;
  line-height: 1.2em;
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

const H2 = styled.h2`
  margin-bottom: 10px;
  font-size: 2em;
  color: #fff3;
  text-transform: uppercase;
  font-weight: 100;
`;

const Wrap = styled.div`
  margin: 0 1rem;
`;

const LogoImg = styled.div`
  height: 225px;
  background-image: url(${process.env.PUBLIC_URL}/img/logo-fff-30.png);
  background-repeat: no-repeat;
  background-size: 100%;
  text-indent: -9999px;
`;

const InputStyles = css`
  width: 100%;
  background: #999;
  border: 0;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 1.5em;
  font-family: inherit;
  color: #666;
  font-weight: 400;
`;

const Input = styled.input`
  ${InputStyles};
`;

const TextArea = styled.textarea`
  ${InputStyles};
  height: 250px;
`;
const Button = styled.button`
  ${InputStyles};
  padding: 5px;
  margin-bottom: 0;
  cursor: pointer;
`;


const ContentBlock = () => {
  return (
    <div style={{padding: "1rem 0 0 30px"}}>
      <LogoImg />
      <Wrap>
        <H2>Contact</H2>
        <Div>
          <form id="contactForm" class="module-main bg-3">
            <Input class="input name" type="text" name="name" placeholder="Your Name" />
            <Input class="input email" type="text" name="email" placeholder="Your Email" />
            <TextArea class="input message" name="message" placeholder="Your Message"></TextArea>
            <Button type="submit" class="submit">Send</Button>
            <Input type="hidden" name="mailed" value="true" />
          </form>
        </Div>
      </Wrap>
      <Wrap>
        <H2>News</H2>
        {news.entries.map(item => (
          <Div key={item.id}>
            <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row-reverse"}}>
              <p children={item.date_entered} />
            </div>
            {item.description}
          </Div>
        ))}
      </Wrap>
      <Wrap>
        <H2>Studio</H2>
        {studio.entries.map(item => (
          <Div key={item.id}>
            <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row-reverse"}}>
              <p children={item.date_entered} />
            </div>
            <img src={`${process.env.PUBLIC_URL}/img/studio/${item.image_src}.jpg`} alt="" />
          </Div>
        ))}
      </Wrap>
      <Wrap>
        <H2>Works</H2>
        {works.entries.map(item => (
          <Div key={item.id}>
            <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row-reverse"}}>
              <p children={item.date_entered} />
              <p children={item.workname} />
            </div>
            <img src={`${process.env.PUBLIC_URL}/img/works/${item.image_src}.jpg`} alt="" />
            <p>Related Images: {item.related_images}</p>
          </Div>
        ))}
      </Wrap>
    </div>
  )
};

export default ContentBlock;
