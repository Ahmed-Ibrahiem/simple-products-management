import { Component } from "react";
import "./NewProductFrom.css";
import { ProductsListContext } from "../../Context/ProductsListContext";
import { categories } from "../../Helpers/ConstensData";

class NewProductFrom extends Component {
  // Use the context to access the products list functions
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
      image: "",
    },
  };

  // Check if input is valid (not empty)
  is_input_valid = (e) => {
    if (e.target.value.trim() !== "") {
      // Add the class "up" to lift the label
      e.target.classList.add("up");
      // Remove the class "not_valid"
      e.target.classList.remove("not_valid");
    } else {
      // Remove the class "up"
      e.target.classList.remove("up");
      // Add the class "not_valid" to alert the user
      e.target.classList.add("not_valid");
    }
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
    this.is_input_valid(e); // check input validity
  };

  // Reset the form values to default
  reset_form_info = () => {
    this.setState((prev) => ({
      ...prev,
      form_info: {
        name: "",
        price: "",
        category: "Office",
        sku: "",
        stock: "",
        image: "/images/placeholder_image.jpg",
      },
    }));
  };

  // Mark form as valid
  valid_form = () => {
    this.setState({ is_valid: true });
  };

  // Mark form as not valid
  not_valid_form = () => {
    this.setState({ is_valid: false });
  };

  // Add new product to the context list
  add_to_list = () => {
    const { addToList } = this.context;
    // Only add if form is valid
    if (this.state.is_valid) {
      addToList({
        ...this.state.form_info,
        id: Math.round(Math.random() * 1000),
      });
      // Reset form inputs after adding
      this.reset_form_info();
      // Mark form as not valid again
      this.not_valid_form();
    }
  };

  // Validate form inputs (all required fields must not be empty)
  validation_condition = () => {
    if (
      this.state.form_info.name.trim() !== "" &&
      this.state.form_info.price.trim() !== "" &&
      this.state.form_info.sku.trim() !== "" &&
      this.state.form_info.stock.trim() !== "" &&
      this.state.form_info.image.trim() !== ""
    ) {
      this.valid_form();
    } else {
      this.not_valid_form();
    }
  };

  render() {
    return (
      <div
        className={`new_product_form ${this.props.is_open ? "open" : "close"}`}
        onClick={(e) => {
          // Close the form if user clicks outside the content
          if (e.target === e.currentTarget) {
            this.props.toggleProductFormActive();
          }
        }}
      >
        <div className="content">
          <h1>Add New Product</h1>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            {/* Product Name */}
            <div className="section">
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
              <label htmlFor="name">Product Name</label>
            </div>

            {/* Product Price */}
            <div className="section">
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
              <label htmlFor="price">Product Price</label>
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
              <label htmlFor="sku">Product SKU</label>
            </div>

            {/* Product Stock */}
            <div className="section">
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
              <label htmlFor="stock">Product Stock</label>
            </div>

            {/* Product Image */}
            <div className="section">
              <input
                type="text"
                name="image"
                value={this.state.form_info.image}
                onChange={(e) => {
                  this.update_form(e);
                }}
                id="image"
                autoComplete="off"
              />
              <label htmlFor="image">Product Image Url</label>
            </div>

            {/* Buttons */}
            <button
              onClick={this.add_to_list}
              className={this.state.is_valid ? "valid" : "not_valid"}
            >
              Add Product
            </button>
            <button type="reset" onClick={this.reset_form_info}>
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewProductFrom;
