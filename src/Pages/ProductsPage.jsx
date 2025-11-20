import { Component } from "react";
import Header from "../Components/Header of products page/Header";
import SearchAndFilter from "../Components/Search & Filter Section/Search&filter";
import ProductsGrid from "../Components/Products View/Products_view";


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
