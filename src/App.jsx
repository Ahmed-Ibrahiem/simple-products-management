import React from "react";
import Home from "./Pages/Home.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router";
import About from "./Pages/About.jsx";
import NewProductFrom from "./Components/add-new-product-form/NewProductFrom.jsx";
import { productsFormContext } from "./Context/NewProductFromContext.jsx";
import ConfirmationMessage from "./Components/confimation-message/ConfirmationMessage.jsx";
import ProductModificationFrom from "./Components/product-modification-form/ProductModificationFrom.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  static contextType = productsFormContext;

  render() {
    const {
      is_new_product_form_active,
      toggleProductFormActive,
      is_edit_product_form_active,
      toggleEditProductFormActive,
    } = this.context;

    return (
      <div className="div_container">
        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />

        {/* my App */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        <NewProductFrom
          is_open={is_new_product_form_active}
          toggleProductFormActive={toggleProductFormActive}
        />
        <ConfirmationMessage />
        <ProductModificationFrom
          is_open={is_edit_product_form_active}
          toggleEditProductFormActive={toggleEditProductFormActive}
        />
      </div>
    );
  }
}

export default App;
