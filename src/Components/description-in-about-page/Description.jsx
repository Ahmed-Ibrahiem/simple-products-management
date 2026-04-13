import { Component } from "react";
import "./Description.css";

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="title">
          <i className="fa-solid fa-circle-info"></i>
          <h2>What is this? </h2>
        </div>
        <p>
          This project is a training app built using React Class Components.
          The goal is to practice state management, context, and component
          structure while simulating a real product dashboard.
        </p>
        <button className="learn_more">Learn More</button>
      </div>
    );
  }
}
export default Description;
