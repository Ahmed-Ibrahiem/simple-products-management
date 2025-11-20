import { Component } from "react";
import AboutHeader from "../Components/Header of about page/AboutHeader";
import ContentOfAbout from "../Components/Content of About page/ContentOfAbout";

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
