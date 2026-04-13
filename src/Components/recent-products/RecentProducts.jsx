import { Component } from "react";
import "./RecentProducts.css";
import { ProductsListContext } from "../../Context/ProductsListContext";
import RecentProductBox from "../recent-product-box/RecentProductBox";

class RecentProducts extends Component {

  static contextType = ProductsListContext;


  render() {
    
    const {recentProducts} = this.context
    
    return (
      <div className="recent_products">
        <h3>Recent Products</h3>
        <div className="recent_products_list">
          {recentProducts.length <= 0 && (
            <div className="no_products">
              <i className="fa-solid fa-box-open"></i>
              <p>No Products Added Yet</p>
            </div>
          )}
          {recentProducts.length > 0 &&
            recentProducts.map((pro) => {
              return <RecentProductBox productData={pro} key={pro.id} />;
            })}
        </div>
      </div>
    );
  }
}
export default RecentProducts;
