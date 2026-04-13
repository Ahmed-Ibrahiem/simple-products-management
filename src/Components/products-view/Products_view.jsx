import { Component } from "react";
import "./ProductsGrid.css";
import GridOfProducts from "../grid-products/GridOfProducts";
import Pagination from "../Pagination/Pagination";
import { ProductsListContext } from "../../Context/ProductsListContext";
import PrimaryButton from "../primary-button/PrimaryButton";

class ProductsGrid extends Component {
  static contextType = ProductsListContext;

  render() {
    const {
      ProductsList,
      filterProducts,
      isLoading,
      isWrong,
      getPriceOfAllProducts,
    } = this.context;

    const productsPrice = getPriceOfAllProducts();

    return (
      <div className="products_grid">
        <div className="grid_header">
          <p>Total Price: {productsPrice} $</p>
          <div className="actions_btns">
            <PrimaryButton />
          </div>
        </div>

        <div className="body">
          {isLoading && <h1>Loading...</h1>}
          {!isLoading && isWrong && <h1>Something Went Wrong</h1>}
          {!isLoading && !isWrong && (
            <>
              {filterProducts.length > 0 ? (
                <>
                  <GridOfProducts products_data={ProductsList} />
                  <Pagination />
                </>
              ) : (
                <div className="no_products_available">
                  <h2>No Products Available</h2>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}
export default ProductsGrid;
