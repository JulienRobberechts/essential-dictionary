import React from "react";
import styled from "styled-components";

import Definitions from "./definitions";

const Search = ({ searchText, definitions, handleSubmit, handleChange }) => {
  return (
    <div>
      <Header>
        <Title>Essential dictionary</Title>
        <SubTitle>Dictionary for children grades 3–5, ages 8–11</SubTitle>
      </Header>
      <SearchSection>
        <form onSubmit={handleSubmit}>
          <SearchBox
            type="text"
            name="search"
            value={searchText}
            onChange={handleChange}
          />
          <SearchButton type="submit" value="OK" />
        </form>
      </SearchSection>
      <ResultSection>
        <Definitions word={searchText} definitions={definitions} />
      </ResultSection>
    </div>
  );
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

export default Search;