import React from "react";
import styled from "styled-components";

const Suggestions = ({ word, suggestions }) => {
  return (
    <div>

      {suggestions && suggestions.length > 0 &&
        <div>
          <div>See also</div>
          {
            suggestions.map(suggestion =>
              <SuggestionItem>
                {suggestion}
              </SuggestionItem>
            )}
        </div>
      }
    </div>
  );
}

const SuggestionItem = styled.div`
  margin-left: 0.5rem;
`;

export default Suggestions;
