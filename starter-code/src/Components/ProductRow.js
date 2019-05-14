import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let color;
    if (!this.props.stocked) {
      color = { color: "red" };
    }
    return (
      <tr style={color}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
