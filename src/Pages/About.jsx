import { Component } from "react";
import AboutHeader from "../Components/header-of-about-page/AboutHeader";
import ContentOfAbout from "../Components/content-of-about-page/ContentOfAbout";

class About extends Component {
  render() {
    return (
      <div className="About fade-in">
        <AboutHeader />
        <ContentOfAbout />
      </div>
    );
  }
}
export default About;
