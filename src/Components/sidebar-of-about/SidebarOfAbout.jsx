import { Component } from "react";
import "./SidebarOfAbout.css";

class SidebarOfAbout extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="top">
          <div className="img_box">
            <i className="fa-solid fa-box"></i>
          </div>
          <div className="text">
            <h3>My Product Dashboard</h3>
            <p>Version 14.2</p>
          </div>
        </div>
        <ul className="body">
          <li>
            <p>Build</p>
            <span>#2025-09-18</span>
          </li>
          <li>
            <p>Last Update</p>
            <span>Sep 29, 2025</span>
          </li>
          <li>
            <p>Status</p>
            <span>Stable</span>
          </li>
        </ul>
        <div className="bottom">
          <button>
            <i className="fa-solid fa-lock"></i>
            <p>Privacy & Security</p>
          </button>
          <button>
            <i className="fa-solid fa-scale-balanced"></i>
            <p>Terms of Service</p>
          </button>
          <button>
            <i className="fa-solid fa-link"></i>
            <p>API Status</p>
          </button>
        </div>
      </div>
    );
  }
}
export default SidebarOfAbout;
