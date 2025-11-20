import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ProductsListProvider from "./Context/ProductsListContext.jsx";
import ProductsFromProvider from "./Context/NewProductFromContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsFromProvider>
      <ProductsListProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsListProvider>
    </ProductsFromProvider>
  </StrictMode>
);
