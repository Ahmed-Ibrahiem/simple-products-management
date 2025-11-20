import { Component } from "react";
import "./GridOfProducts.css";
import ProductCard from "../Product Card/ProductCard";
import { ProductsListContext } from "../../Context/ProductsListContext";

class GridOfProducts extends Component {
  static contextType = ProductsListContext;

  render() {
    const { productsWillDispalyed } = this.context;

    return (
      <div className="grid_products">
        {productsWillDispalyed.map((productData) => {
          return <ProductCard key={productData.id} productData={productData} />;
        })}
      </div>
    );
  }
}
export default GridOfProducts;
