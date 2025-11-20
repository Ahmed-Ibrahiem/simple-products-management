import { Component } from "react";
import { price_options } from "../../Helpers/ConstensData";
import { ProductsListContext } from "../../Context/ProductsListContext";

class PriceRange extends Component {
  static contextType = ProductsListContext;

  state = {
    price_active: false,
  };

  togglePriceActive = () => {
    this.setState((prev) => ({ ...prev, price_active: !prev.price_active }));
  };

  componentDidUpdate(PrevProps, Prevstate) {
    const { updateFilterProducts, price_option } = this.context;

    if (PrevProps.ProductsList !== this.props.ProductsList) {
      updateFilterProducts(price_option);
    }
  }
  0;

  render() {
    const {
      updateFilterProducts,
      reset_current_page,
      updateRangeOption,
      price_option_show,
    } = this.context;

    return (
      <div className="price_range_box box">
        <label htmlFor="price_range"> Price Range</label>
        <div
          className="select"
          onClick={(e) => {
            this.togglePriceActive();
          }}
        >
          <p className="current_option">{price_option_show}</p>
          <div className={`options ${this.state.price_active ? "active" : ""}`}>
            {price_options.map((option, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    updateRangeOption(option);
                    updateFilterProducts(option.value);
                    reset_current_page();
                  }}
                >
                  {option.show}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PriceRange;
