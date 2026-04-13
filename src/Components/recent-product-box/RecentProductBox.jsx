import { Component } from "react";
import "./RecentProductBox.css";
import EditButton from "../edit-button/EditButton";

class RecentProductBox extends Component {
  render() {
    return (
      <div className="recent_product">
        <div className="product_info">
          <div className="img_box">
            <img
              src={this.props.productData.image}
              onError={(e) => (e.target.src = "/images/placeholder_image.jpg")}
              alt={`This is image of ${this.props.productData.name} Products `}
            />
          </div>
          <div className="product_details">
            <h4 className="product_name">{this.props.productData.name}</h4>
            <div>
              <p>${this.props.productData.price}</p>.
              <p>{this.props.productData.category}</p>
            </div>
          </div>
        </div>
        <EditButton productEdit={this.props.productData} />
      </div>
    );
  }
}

export default RecentProductBox;
