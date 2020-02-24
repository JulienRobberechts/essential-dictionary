import React, { Component } from "react";

import Search from "./search";
import { getDefinitions } from "../adapters/dictionary";

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
    return (
      <Search
        searchText={this.state.searchText}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        definitions={this.state.definitions}
      />
    );
  }
}

export default SearchContainer;
