import { Component } from "react";
import Header from "../Components/header-of-products-page/Header";
import SearchAndFilter from "../Components/search-and-filter-section/Search&filter";
import ProductsGrid from "../Components/products-view/Products_view";


class ProductsPage extends Component {


  render() {
    return (
      <div className="products_page fade-in">
        <Header />
        <SearchAndFilter />
        <ProductsGrid />
      </div>
    );
  }
}
export default ProductsPage;
