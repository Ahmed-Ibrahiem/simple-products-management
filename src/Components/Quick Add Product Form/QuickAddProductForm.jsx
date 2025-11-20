import { Component } from "react";
import "./QuickAddProductForm.css";
import { Handel_quick_add_product_data } from "../../Helpers/CreateNewProduct";
import { ProductsListContext } from "../../Context/ProductsListContext";

class QuickAddProductForm extends Component {
  static contextType = ProductsListContext;

  state = {
    // Handle open & close category menu
    categroy_active: false,
    // Handle form info
    form_info: {
      name: "",
      price: "",
      category: "Office",
    },
    is_input_valid: false,
  };

  // Create function to toggle the category value
  toggle_category = (category_type) => {
    this.setState((prev) => ({
      ...prev,
      form_info: {
        ...this.state.form_info,
        category: category_type,
      },
    }));
  };

  // Create function to toggle the category open & close it
  toggleCategoryActive = () => {
    this.setState((prev) => ({
      ...prev,
      categroy_active: !this.state.categroy_active,
    }));
  };

  updateFormInfo = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => {
      return {
        ...prev,
        form_info: {
          ...this.state.form_info,
          [name]: value,
        },
      };
    }, this.validation_condition);
  };

  valid_input = () => {
    this.setState({ is_input_valid: true });
  };

  not_valid_input = () => {
    this.setState({ is_input_valid: false });
  };

  validation_condition = () => {
    if (
      this.state.form_info.name.trim() == "" ||
      this.state.form_info.price.trim() == ""
    ) {
      this.not_valid_input();
    } else {
      this.valid_input();
    }
  };

  resetFormInfo = () => {
    this.setState((prev) => {
      return {
        ...prev,
        form_info: {
          name: "",
          price: "",
          category: "Office",
        },
      };
    }, this.validation_condition);
  };

  render() {
    const { addToList } = this.context;
    const categories = [
      "Office",
      "Decor",
      "Appliances",
      "Electronics",
      "Furniture",
    ];
    return (
      <div className="quick_add_product_form">
        <h3>Quick Add Product Form</h3>
        <form onSubmit={(e) => e.preventDefault()} action="">
          <div className="product_name">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              name="name"
              value={this.state.form_info.name}
              onChange={(e) => this.updateFormInfo(e)}
              placeholder="Product Name"
              autoComplete="off"
            />
          </div>
          <div className="product_price">
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              name="price"
              value={this.state.form_info.price}
              placeholder="Product Price"
              autoComplete="off"
              onChange={(e) => this.updateFormInfo(e)}
            />
          </div>
          <div className="product_category">
            <label htmlFor="product_category">Product Category</label>
            <div className="select" onClick={this.toggleCategoryActive}>
              <p className="current_option">{this.state.form_info.category}</p>
              <i
                className={`fa-solid fa-angle-right ${
                  this.state.categroy_active ? "active" : ""
                }`}
              ></i>
              <div
                className={`options ${
                  this.state.categroy_active ? "active" : ""
                }`}
              >
                {categories.map((categ, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => this.toggle_category(categ)}
                    >
                      {categ}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="form_btns">
            <button
              onClick={() => {
                if (this.state.is_input_valid) {
                  addToList(
                    Handel_quick_add_product_data(this.state.form_info)
                  );
                  // Reset the quick form to defualt value
                  this.resetFormInfo();
                }
              }}
              className={`add_product ${
                this.state.is_input_valid ? "valid" : "not_valid"
              }`}
            >
              <i className="fa-regular fa-floppy-disk"></i>
              <p>Add Product</p>
            </button>
            <button
              className="reset_btn"
              onClick={this.resetFormInfo}
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default QuickAddProductForm;
