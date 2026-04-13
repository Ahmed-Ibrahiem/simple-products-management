import { Component } from "react";
import { ProductsListContext } from "../../Context/ProductsListContext";

class SortProducts extends Component {
  static contextType = ProductsListContext;

  state = {
    sort_active: false,
    sort_option: "Name",
  };

  toggleSortActive = () => {
    this.setState((prev) => ({ ...prev, sort_active: !prev.sort_active }));
  };

  componentDidUpdate(PrevProps, Prevstate) {
    const { sortProductsList } = this.context;

    if (PrevProps.filterProducts !== this.props.filterProducts) {
      sortProductsList("name");
    }
  }

  render() {
    const { sortProductsList } = this.context;
    return (
      <div className="sort_box box">
        <label htmlFor="sort"> Sort By</label>
        <div className="select" onClick={this.toggleSortActive}>
          <p className="current_option">{this.state.sort_option}</p>
          <div className={`options ${this.state.sort_active ? "active" : ""}`}>
            <span
              onClick={() => {
                this.setState((prev) => ({
                  ...prev,
                  sort_option: "Name",
                }));
                sortProductsList("name");
              }}
            >
              Name
            </span>
            <span
              onClick={() => {
                this.setState((prev) => ({
                  ...prev,
                  sort_option: "A - Z",
                }));
                sortProductsList("az");
              }}
            >
              A-Z
            </span>
            <span
              onClick={() => {
                this.setState((prev) => ({
                  ...prev,
                  sort_option: "Z - A",
                }));
                sortProductsList("za");
              }}
            >
              Z-A
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SortProducts;
