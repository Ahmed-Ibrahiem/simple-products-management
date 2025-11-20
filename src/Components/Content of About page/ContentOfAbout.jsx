import { Component } from "react";
import "./ContentOfAbout.css";
import SidebarOfAbout from "../Sidebar Of About/SidebarOfAbout";
import MainOfAbout from "../Main of About Page/MainOfAbout";

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
