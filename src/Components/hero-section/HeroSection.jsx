import { Component } from "react";
import "./HeroSection.css";
import PrimaryButton from "../primary-button/PrimaryButton";
class HeroSection extends Component {
  render() {
    return (
      <div className="hero_section">
        <div className="left_hero">
          <h1>Welcome Back</h1>
          <p>
            Manage your catalog add new prodcuts, and track changes at a giance
          </p>
        </div>
        <div className="right_hero">
          <PrimaryButton />
        </div>
      </div>
    );
  }
}

export default HeroSection;
