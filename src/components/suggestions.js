import React from "react";
import styled from "styled-components";

const Suggestions = ({ word, suggestions }) => {
  return (
    <div>

      {suggestions && suggestions.length > 0 &&
        <>
          <SeeAlso>See also</SeeAlso>
          {
            suggestions.map(suggestion =>
              <SuggestionItem>
                <a href={'?' + suggestion}>{suggestion}</a>
              </SuggestionItem>
            )}
        </>
      }
    </div>
  );
}

const SuggestionItem = styled.div`
  margin-left: 0.5rem;
`;

const SeeAlso = styled.div`
  font-style: italic;
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`;

export default Suggestions;
