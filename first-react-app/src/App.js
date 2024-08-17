import React from "react";
import styled from "styled-components";
import { CountingComponent } from "./components/ClassComponent";
import Counter from "./components/FunctionalComponent";
import Button from "./components/Button";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border-radius: 5px;
`;

function App() {
  return (
    <Wrapper>
      <CountingComponent />
      <Counter />

      <Button />
    </Wrapper>
  );
}

export default App;
