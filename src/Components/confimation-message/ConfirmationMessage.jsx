import { Component } from "react";
import "./ConfirmationMessage.css";
import { ProductsListContext } from "../../Context/ProductsListContext";

class ConfirmationMessage extends Component {
  static contextType = ProductsListContext;

  render() {
    const {
      is_active_confirmation_message,
      deleteProduct,
      hide_confrimation_message,
    } = this.context;

    return (
      <div
        className={`confirm_message ${
          is_active_confirmation_message ? "show" : "hide"
        }`}
      >
        <div className="content">
          <h1>Are you sure you want to complete this process?</h1>
          <div className="desiction_buttons">
            <button
              className="confirm"
              onClick={() => {
                deleteProduct();
                hide_confrimation_message();
              }}
            >
              Confirm
            </button>
            <button className="cancel" onClick={()=>{
              hide_confrimation_message();
              
            }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationMessage;
