import React from "react";

import Wrap from "./components/wrap";
import ContentBlock from "./components/contentBlock";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <Wrap>
      <Navigation />
      <ContentBlock />
    </Wrap>
  )
};

export default App;
