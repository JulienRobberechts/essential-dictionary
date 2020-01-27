import React, { Component } from "react";
import debug from "debug";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

class Definition extends Component {
  renderHtmlParagraph(pt) {
    const html = pt[1]
      .replace(/{it}/gm, "<i>")
      .replace(/{\/it}/gm, "</i>")
      .replace(/{bc}/gm, "")
      .replace(/{\/bc}/gm, "")
      .replace(/{inf}/gm, "<sub>")
      .replace(/{\/inf}/gm, "</sub>")
      .replace(/{b}/gm, "<b>")
      .replace(/{\/b}/gm, "</b>");

    return ReactHtmlParser(html);
  }

  render() {
    const { definition } = this.props;
    debug("definition", definition.shortdef);
    return (
      <div>
        <Title>{definition.hwi.hw}</Title>{" "}
        <WordType>({definition.fl})</WordType>
        {definition.hwi.prs && (
          <>
            {" - "}
            <WordPronunciation>[{definition.hwi.prs[0].mw}]</WordPronunciation>
          </>
        )}
        <List>
          {definition.shortdef.map((sd, i) => (
            <li key={i}>{sd}</li>
          ))}
        </List>
        {definition.history && (
          <HistorySection>
            <HistoryParagraphTitle>
              {definition.history.pl}
            </HistoryParagraphTitle>
            {definition.history.pt.map((pt, i) => (
              <HistoryParagraph key={i}>
                {this.renderHtmlParagraph(pt)}
              </HistoryParagraph>
            ))}
          </HistorySection>
        )}
      </div>
    );
  }
}

const HistorySection = styled.div``;

const HistoryParagraphTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 0.3rem;
`;

const HistoryParagraph = styled.div`
  margin: 0 0.5rem 0.2rem 0.5rem;
  text-align: justify;
  font-weight: 200;
  font-size: 0.9rem;
`;

const Title = styled.span`
  font-weight: 500;
`;

const WordType = styled.span`
  font-weight: 300;
  font-style: italic;
`;

const WordPronunciation = styled.span`
  font-weight: 300;
  font-style: italic;
`;

const List = styled.ul`
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
`;

export default Definition;
