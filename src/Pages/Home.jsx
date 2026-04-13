import { Component } from "react";
import ProductsSection from "../Components/products-section/ProductsSection";
import StatesCards from "../Components/states-cards/StatesCards";
import HeroSection from "../Components/hero-section/HeroSection";

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
