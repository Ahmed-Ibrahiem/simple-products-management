import { Component } from "react";
import "./TeamInAbout.css";
import my_image from "/my_image.jpg";
import ai_image from "/banani_ai_logo.jpeg";

class TeamInAbout extends Component {
  render() {
    return (
      <div className="team">
        <div className="title">
          <i className="fa-solid fa-people-group"></i>
          <h2>Team</h2>
        </div>
        <div className="members">
          <div className="member">
            <div className="img_box">
              <img src={my_image} alt="" />
            </div>
            <div className="text">
              <h3>Ahmed Ibrahiem</h3>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="member">
            <div className="img_box">
              <img src={ai_image} alt="" />
            </div>
            <div className="text">
              <h3>Banani ai</h3>
              <p>Design</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamInAbout;
