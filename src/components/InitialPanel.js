import React from "react";
import styled from "styled-components";

const InitialPanel = () =>
  <Panel>
    <Text>Type a word in the search bar</Text>
    <ImageContainer>
      <img src="./images/merriam-webster.png" alt="/merriam-webster" />
    </ImageContainer>
  </Panel>

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-style: italic;
`;

const ImageContainer = styled.div`
  margin: 2rem;
`;

export default InitialPanel;