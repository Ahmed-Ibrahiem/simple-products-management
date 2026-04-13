import { Component } from "react";
import "./Support.css";

class Support extends Component {
  render() {
    return (
      <div className="support">
        <div className="title">
          <i className="fa-solid fa-phone"></i>
          <h3>Support</h3>
        </div>
        <div className="content">
          <p>For questions about this training project, please contact:</p>
          <div className="right">
            <button className="view_FAQs">
              <i className="fa-regular fa-comment"></i>
              <span>View FAQs</span>
            </button>
            <button className="contact_us">
              <i className="fa-solid fa-paper-plane"></i>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Support;
