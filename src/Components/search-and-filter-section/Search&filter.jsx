import { Component } from "react";
import "./Search&filter.css";
import PriceRange from "../sort-options/PriceRange.jsx";
import SortProducts from "../sort-products/SortProducts.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import { ProductsListContext } from "../../Context/ProductsListContext";


class SearchAndFilter extends Component {
  static contextType = ProductsListContext;

  render() {
    const { ProductsList , filterProducts } = this.context;
    return (
      <div className="search_filter_container">
        <SearchBox />
        <div className="filter_box">
          <SortProducts filterProducts={filterProducts} />
          <PriceRange ProductsList={ProductsList} />
        </div>
      </div>
    );
  }
}

export default SearchAndFilter;
