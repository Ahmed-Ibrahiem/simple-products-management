import { Component } from "react";
import "./Header.css";
import { get_random_data_for_product } from "../../Helpers/CreateNewProduct";
import { ProductsListContext } from "../../Context/ProductsListContext";

class Header extends Component {
  static contextType = ProductsListContext;

  render() {
    const { addToList, ProductsList, show_confrimation_message } = this.context;

    return (
      <div className="header">
        <h1>Products</h1>
        <div className="products_control">
          <button
            onClick={() => {
              addToList(get_random_data_for_product());
            }}
            className="add_random_product"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <p>Add Random Product</p>
          </button>
          <button
            onClick={() => show_confrimation_message(...ProductsList)}
            className="clear_all_products"
          >
            <i className="fa-solid fa-trash"></i>
            <p>Clear All</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
