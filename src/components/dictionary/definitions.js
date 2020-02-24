import React, { Component } from "react";
import styled from "styled-components";
import Definition from "./definition";

class Definitions extends Component {
  render() {
    const { word, definitions } = this.props;
    return (
      <div>
        {definitions && definitions.length > 0 &&
          <DefsHeader>
            Definitions of <strong>'{word}'</strong> (
            <span>
              <a
                className="word-link"
                href={`https://en.wiktionary.org/wiki/${word}`}
              >
                Wikipedia
            </a>
            </span>
            )
        </DefsHeader>
        }

        <div>
          {definitions && (
            <div>
              {definitions.map((d, i) => (
                <DefinitionBox key={i}>
                  <Definition word={word} definition={d} />
                </DefinitionBox>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const DefsHeader = styled.div`
  margin: 0.5rem;
`;

const DefinitionBox = styled.div`
  border-radius: 7px;
  margin: 0.5rem;
  padding: 0.5rem;
  :nth-child(even) {
    background: #ddd;
  }
  :nth-child(odd) {
    background: #eee;
  }
`;

export default Definitions;
