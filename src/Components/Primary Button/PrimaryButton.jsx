import { Component } from "react";
import { productsFormContext } from "../../Context/NewProductFromContext";

class PrimaryButton extends Component {
  static contextType = productsFormContext;

  render() {
    const { toggleProductFormActive } = this.context;
    return (
      <button onClick={toggleProductFormActive} className="add_product_btn">
        <i className="fa-solid fa-plus"></i> <span> New Product</span>
      </button>
    );
  }
}

export default PrimaryButton;
