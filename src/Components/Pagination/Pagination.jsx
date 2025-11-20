import { Component } from "react";
import "./Pagination.css";
import { ProductsListContext } from "../../Context/ProductsListContext";

class Pagination extends Component {
  static contextType = ProductsListContext;

  render() {
    const {
      updateCurrentPage,
      startProductNumber,
      lastProductNumber,
      filterProducts
    } = this.context;
    return (
      <div className="pagination">
        <div className="pagination_info">
          <h1>
            showing {startProductNumber + 1} - {lastProductNumber} of{" "}
            {filterProducts.length}
          </h1>
        </div>
        <div className="pagination_actions">
          <button
            onClick={() => updateCurrentPage("prev")}
            className={`prev_page ${
              startProductNumber + 1 == 1 ? "not_valid" : ""
            } `}
          >
            <i className="fa-solid fa-angle-left"></i>
            <span>Prev</span>
          </button>
          <button
            onClick={() => updateCurrentPage("next")}
            className={`next_page ${
              lastProductNumber == filterProducts.length ? "not_valid" : ""
            }`}
          >
            <span>Next</span>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default Pagination;
