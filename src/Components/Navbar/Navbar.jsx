import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router";

class Navbar extends Component {
  state = {
    active: window.location.pathname,
  };

  render() {
    return (
      <div className="navbar ">
        <div className="logo">
          <i className="fa-solid fa-box"></i>
          <h1>My Products Dashboard</h1>
        </div>
        <ul className="menu">
          <Link to={"/"}>
            <li
              onClick={() =>
                this.setState((prev) => ({ ...prev, active: "home" }))
              }
              className={
                this.state.active === "home" ||
                this.state.active === "/home" ||
                this.state.active === "/"
                  ? "active"
                  : ""
              }
            >
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/products"}>
            <li
              onClick={() =>
                this.setState((prev) => ({ ...prev, active: "products" }))
              }
              className={
                this.state.active === "/products" ||
                this.state.active === "products"
                  ? "active"
                  : ""
              }
            >
              <span>Products</span>
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              onClick={() =>
                this.setState((prev) => ({ ...prev, active: "about" }))
              }
              className={
                this.state.active === "/about" || this.state.active === "about"
                  ? "active"
                  : ""
              }
            >
              <span>About</span>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
