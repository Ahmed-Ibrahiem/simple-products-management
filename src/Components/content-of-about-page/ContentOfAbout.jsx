import { Component } from "react";
import "./ContentOfAbout.css";
import SidebarOfAbout from "../sidebar-of-about/SidebarOfAbout";
import MainOfAbout from "../main-of-about-page/MainOfAbout";

class ContentOfAbout extends Component {
  render() {
    return (
      <div className="content">
        <SidebarOfAbout />
        <MainOfAbout />
      </div>
    );
  }
}
export default ContentOfAbout;
