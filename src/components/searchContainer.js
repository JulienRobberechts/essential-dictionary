import React, { Component } from "react";

import Search from "./search";
import { searchWordDefinition } from "../domains/dictionary";

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = { dicoData: {}, searchText: "react" };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    console.log("handleSubmit", e);
    e.preventDefault();

    if (this.state.searchText) {
      searchWordDefinition(this.state.searchText).then(dicoData => {
        console.log("dicoData", dicoData);
        this.setState({ dicoData: dicoData });
      });
    }
  };

  render() {
    return (
      <Search
        searchText={this.state.searchText}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        dicoData={this.state.dicoData}
      />
    );
  }
}

export default SearchContainer;
