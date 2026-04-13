import { Component } from "react";
import "./Highilights.css";

class Highilights extends Component {
  render() {
    return (
      <div className="highilights">
        <div className="title">
          <i className="fa-solid fa-check-double"></i>
          <h2>Highlights</h2>
        </div>
        <div className="cards">
          <div className="card">
            <i className="fa-regular fa-square-check"></i>
            <h3>Practice on React Class Components.</h3>
          </div>
          <div className="card">
            <i className="fa-regular fa-square-check"></i>
            <h3>Using Context API for state management.</h3>
          </div>
          <div className="card">
            <i className="fa-regular fa-square-check"></i>
            <h3>Working with fake API & localStorage.</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Highilights;
