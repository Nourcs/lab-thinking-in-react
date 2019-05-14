import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-5">
        <form>
          <h5 className="text-center">Search</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Looking for something?"
            onChange={this.props.onInput}
          />
          <div className="custom-control custom-checkbox text-center mt-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={this.props.onCheck}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Products in stock
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
