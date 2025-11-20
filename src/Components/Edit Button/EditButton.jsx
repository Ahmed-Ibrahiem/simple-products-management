import { Component } from "react";
import { ProductsListContext } from "../../Context/ProductsListContext";

class EditButton extends Component {
  static contextType = ProductsListContext;

  render() {
    const { setProductWillEdited, toggleEditProductFormActive } = this.context;
    return (
      <button
        onClick={() => {
          setProductWillEdited(this.props.productEdit);
          toggleEditProductFormActive();
        }}
        className="edit_product"
      >
        <i className="fa-solid fa-pen"></i>
        <span>Edit</span>
      </button>
    );
  }
}

export default EditButton;
