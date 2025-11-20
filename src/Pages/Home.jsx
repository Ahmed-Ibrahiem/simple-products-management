import { Component } from "react";
import ProductsSection from "../Components/Products Section/ProductsSection";
import StatesCards from "../Components/States Cards/StatesCards";
import HeroSection from "../Components/Hero Section/HeroSection";

class Home extends Component {
  render() {
    return (
      <div className="home fade-in">
        <HeroSection
          toggleProductFormActive={this.props.toggleProductFormActive}
        />
        <StatesCards />
        <ProductsSection />
      </div>
    );
  }
}
export default Home;
