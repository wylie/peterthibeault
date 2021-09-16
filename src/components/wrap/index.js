import React from "react";

import List from "../list";
import Divider from "../divider";

import { StyledWrap } from "./styled.js";

import { feels } from "../../data/feels.js";
import { felt } from "../../data/felt.js";

const Wrap = () => {
  return (
    <StyledWrap>
      <Divider text="How Do You Feel?" />
      <List theme="primary" data={feels} />
      <Divider text="Previous Feels" />
      <List theme="secondary" data={felt} />
    </StyledWrap>
  );
};

Wrap.displayName = "Wrap";

export default Wrap;
