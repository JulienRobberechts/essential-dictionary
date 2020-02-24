import React from 'react';
import styled from 'styled-components';

export default ({ word }) =>
  <Panel>
    <Text>Your search term '{word}' did not match any definitions.</Text>
  </Panel>

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: large;
  font-weight: bold;
`;