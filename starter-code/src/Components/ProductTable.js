import React, { Component } from "react";
import ProductRow from "./ProductRow";
import data from "../data.json";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    return (
      <div className="container mt-5 text-center">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <th scope="row">Price</th>
            </tr>
            {this.state.data.map((item, index) => {
              if (
                item.name
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase())
              ) {
                if (this.props.checked) {
                  if (item.stocked) {
                    return <ProductRow {...item} key={index} />;
                  }
                } else {
                  return <ProductRow {...item} key={index} />;
                }
              }
              return;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
