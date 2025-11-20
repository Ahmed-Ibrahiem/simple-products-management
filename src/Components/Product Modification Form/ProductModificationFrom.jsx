import { Component } from "react";
import { categories } from "../../Helpers/ConstensData";
import "./ProductModificationFrom.css";
import { ProductsListContext } from "../../Context/ProductsListContext";

class ProductModificationFrom extends Component {
  static contextType = ProductsListContext;
  state = {
    // Handle open & close category menu
    categroy_active: false,
    // Check if the form is valid or not
    is_valid: false,
    // Store form input values
    form_info: {
      name: "",
      price: "",
      category: "Office",
      sku: "",
      stock: "",
      image: "/images/placeholder_image.jpg",
    },
  };

  // Update the category value
  toggle_category = (category_type) => {
    this.setState((prev) => ({
      ...prev,
      form_info: {
        ...this.state.form_info,
        category: category_type,
      },
    }));
  };

  // Toggle the category dropdown (open/close)
  toggleCategoryActive = () => {
    this.setState((prev) => ({
      ...prev,
      categroy_active: !this.state.categroy_active,
    }));
  };

  // Update form values when user types
  update_form = (e) => {
    const { name, value } = e.target;
    this.setState(
      (prev) => ({
        ...prev,
        form_info: { ...this.state.form_info, [name]: value },
      }),
      // Check if the form is valid after updating
      this.validation_condition
    );
  };

  // Mark form as valid
  valid_form = () => {
    this.setState({ is_valid: true });
  };

  // Mark form as not valid
  not_valid_form = () => {
    this.setState({ is_valid: false });
  };

  // Validate form inputs (all required fields must not be empty)
  validation_condition = () => {
    if (
      this.state.form_info.name.trim() !== "" &&
      this.state.form_info.price !== "" &&
      this.state.form_info.sku.trim() !== "" &&
      this.state.form_info.stock !== ""
    ) {
      this.valid_form();
    } else {
      this.not_valid_form();
    }
  };

  // Edit the product
  edit_product = () => {
    const { modifationProduct } = this.context;
    modifationProduct(this.state.form_info);
    // Close Form
    this.props.toggleEditProductFormActive();
  };

  componentDidUpdate(PrevProps, PrevState) {
    // update the form_info state
    const { productWillBeEdited } = this.context;

    if (PrevProps.is_open !== this.props.is_open) {
      this.setState(
        (prev) => ({
          ...prev,
          form_info: {
            ...productWillBeEdited,
          },
        }),
        this.validation_condition
      );
    }
  }

  render() {
    return (
      <div
        className={`modification_form ${this.props.is_open ? "open" : "close"}`}
        onClick={(e) => {
          // Close the form if user clicks outside the content
          if (e.target === e.currentTarget) {
            this.props.toggleEditProductFormActive();
          }
        }}
      >
        <div className="content">
          <h1>Edit Product</h1>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            {/* Product Name */}
            <div className="section">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                value={this.state.form_info.name}
                onChange={(e) => {
                  this.update_form(e);
                }}
                name="name"
                id="name"
                autoComplete="off"
              />
            </div>

            {/* Product Price */}
            <div className="section">
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                value={this.state.form_info.price}
                onChange={(e) => {
                  this.update_form(e);
                }}
                name="price"
                id="price"
                autoComplete="off"
              />
            </div>

            {/* Product Category */}
            <div className="section">
              <label htmlFor="category">Product Category</label>
              <div className="select" onClick={this.toggleCategoryActive}>
                <p className="current_option">
                  {this.state.form_info.category}
                </p>
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
                        onClick={() => this.toggle_category(categ)}
                        key={index}
                      >
                        {categ}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Product SKU */}
            <div className="section">
              <label htmlFor="sku">Product SKU</label>
              <input
                type="text"
                value={this.state.form_info.sku}
                onChange={(e) => {
                  this.update_form(e);
                }}
                name="sku"
                id="sku"
                autoComplete="off"
              />
            </div>

            {/* Product Stock */}
            <div className="section">
              <label htmlFor="stock">Product Stock</label>
              <input
                type="text"
                onChange={(e) => {
                  this.update_form(e);
                }}
                value={this.state.form_info.stock}
                name="stock"
                id="stock"
                autoComplete="off"
              />
            </div>

            {/* Product Image */}
            <div className="section">
              <label htmlFor="image">Product Image Url</label>
              <input
                type="text"
                value={this.state.form_info.image}
                onChange={(e) => {
                  this.update_form(e);
                }}
                name="image"
                id="image"
                autoComplete="off"
              />
            </div>

            {/* Buttons */}
            <button
              className={this.state.is_valid ? "valid" : "not_valid"}
              onClick={() => this.edit_product()}
            >
              Edit Product
            </button>
            <button
              type="reset"
              onClick={() => this.props.toggleEditProductFormActive()}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductModificationFrom;
