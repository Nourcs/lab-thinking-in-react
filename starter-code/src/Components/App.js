import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      checked: false
    };
  }

  onInput = e => {
    this.setState({
      search: e.target.value
    });
  };

  onCheck = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  render() {
    console.log("State", this.state);
    return (
      <div className="App">
        <h1 className="text-center mt-5">IronStore</h1>
        <SearchBar onInput={this.onInput} onCheck={this.onCheck} />
        <ProductTable search={this.state.search} checked={this.state.checked} />
      </div>
    );
  }
}

export default App;
