import React from "react";
import "./StatesCards.css";
import { ProductsListContext } from "../../Context/ProductsListContext";

class StatesCards extends React.Component {
  static contextType = ProductsListContext;

  render() {
    const { ProductsList , getLowStockNumber } = this.context;
    return (
      <div className="states_cards">
        <div className="state_card">
          <h3>total Products</h3>
          <span>{ProductsList.length}</span>
        </div>
        <div className="state_card">
          <h3>Low Stock</h3>
          <span>{getLowStockNumber()}</span>
        </div>
        <div className="state_card">
          <h3>Last Update</h3>
          <span>Today</span>
        </div>
      </div>
    );
  }
}
export default StatesCards;
