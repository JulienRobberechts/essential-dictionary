import React, { Component } from "react";
import Definitions from "./definitions";
import axios from "axios";
import styled from "styled-components";

const API_KEY = process.env.REACT_APP_MERRIAM_WEBSTER_API_KEY;

const getDefinitions = word => {
  if (!word || word.includes("?") || word.includes("/"))
    throw Error("invalid search");
  console.log("API_KEY", API_KEY);
  if (!API_KEY) throw Error("invalid API_KEY");

  return axios.get(
    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${API_KEY}`
  );
};

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = { definitions: [], searchText: "react" };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    console.log("handleSubmit", e);
    e.preventDefault();

    if (this.state.searchText) {
      getDefinitions(this.state.searchText).then(response => {
        console.log("definitions", response.data);
        this.setState({ definitions: response.data });
      });
    }
  };

  render() {
    const { definitions } = this.state;
    return (
      <div>
        <Header>
          <Title>Essential dictionary</Title>
          <SubTitle>Dictionary for children grades 3–5, ages 8–11</SubTitle>
        </Header>

        <SearchSection>
          <form onSubmit={this.handleSubmit}>
            <SearchBox
              type="text"
              name="search"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
            <SearchButton type="submit" value="OK" />
          </form>
        </SearchSection>
        <ResultSection>
          <Definitions word={this.state.searchText} definitions={definitions} />
        </ResultSection>
      </div>
    );
  }
}

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0.8rem;
  margin-bottom: 0.2rem;
`;

const SubTitle = styled.h5`
  margin-top: 0;
  color: #06e;
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-color: #06e;
`;

const SearchButton = styled.input`
  font-size: 1.5rem;
  margin: 0 1rem;
  background-color: gray;
  border: none;
  padding: 0.5rem;
  color: white;
  background: #06e;
`;

const ResultSection = styled.div`
  margin: 1rem auto;
  max-width: 30rem;
`;

export default SearchContainer;
