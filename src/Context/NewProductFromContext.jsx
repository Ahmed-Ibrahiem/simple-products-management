import { Component, createContext } from "react";

export const productsFormContext = createContext();

class ProductsFromProvider extends Component {
  state = {
    is_new_product_form_active: false,
    is_edit_product_form_active: false,
  };

  toggleProductFormActive = () => {
    this.setState({
      is_new_product_form_active: !this.state.is_new_product_form_active,
    });
  };

  toggleEditProductFormActive = () => {
    this.setState({
      is_edit_product_form_active: !this.state.is_edit_product_form_active,
    });
  };

  render() {
    const value = {
      is_new_product_form_active: this.state.is_new_product_form_active,
      is_edit_product_form_active: this.state.is_edit_product_form_active,
      toggleProductFormActive: this.toggleProductFormActive,
      toggleEditProductFormActive: this.toggleEditProductFormActive,
    };
    return (
      <productsFormContext.Provider value={value}>
        {this.props.children}
      </productsFormContext.Provider>
    );
  }
}

export default ProductsFromProvider;
