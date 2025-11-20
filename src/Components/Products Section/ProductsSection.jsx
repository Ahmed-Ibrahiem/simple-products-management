import { Component } from "react";
import "./ProductsSection.css";
import QuickAddProductForm from "../Quick Add Product Form/QuickAddProductForm";
import RecentProducts from "../Recent Products/RecentProducts";


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
