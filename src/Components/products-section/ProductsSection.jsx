import { Component } from "react";
import "./ProductsSection.css";
import QuickAddProductForm from "../quick-add-product-form/QuickAddProductForm";
import RecentProducts from "../recent-products/RecentProducts";


class ProductsSection extends Component {
  render() {
    return (
      <div className="products_section">
        <QuickAddProductForm />
        <RecentProducts />
      </div>
    );
  }
}

export default ProductsSection;
