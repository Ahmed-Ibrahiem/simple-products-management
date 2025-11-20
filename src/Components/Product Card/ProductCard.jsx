import { Component } from "react";
import "./ProductCard.css";
import { ProductsListContext } from "../../Context/ProductsListContext";
import EditButton from "../Edit Button/EditButton";

class ProductCard extends Component {
  static contextType = ProductsListContext;

  render() {
    const { show_confrimation_message } = this.context;
    return (
      <div className="product">
        <div className="img_box">
          <img
            src={this.props.productData.image}
            onError={(e) => (e.target.src = "/images/placeholder_image.jpg")}
            alt={`This is image of ${this.props.productData.name} Products `}
          />
        </div>
        <div className="product_details">
          <p className="title">{this.props.productData.name}</p>
          <div className="product_price_categroy">
            <span className="category">{this.props.productData.category}</span>
            <span className="price">
              {Math.round(this.props.productData.price)}$
            </span>
          </div>
          <div className="product_info">
            <span className="SKU">{this.props.productData.sku}</span>
            <span className="stock">Stock: {this.props.productData.stock}</span>
          </div>
          <div className="actions">
            <EditButton productEdit={this.props.productData} />
            <button
              className="delete"
              onClick={() => {
                show_confrimation_message(this.props.productData);
              }}
            >
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
