import { Component, createContext } from "react";
import { productsFormContext } from "./NewProductFromContext";
import { toast } from "react-toastify";

// Create the Context to share products-related data and functions across components
export const ProductsListContext = createContext();

class ProductsListProvider extends Component {
  // URL to fetch the products data (local JSON file)
  api_url = "/products_cards.json";

  // ------------------------- STATE -------------------------
  state = {
    productsList: [], // All products data
    isLoading: false, // Shows a loading indicator when fetching or processing
    isWrong: false, // Shows an error message when something goes wrong
    currentPage: 0, // Current page index for pagination
    numberOfPages: 1, // Total number of pages (depends on items per page)
    startProductNumber: 0, // Index of the first product shown on the page
    lastProductNumber: 0, // Index of the last product shown on the page
    productsWillDispalyed: [], // The subset of products displayed on the current page
    is_active_confirmation_message: false, // Whether the delete confirmation modal is active
    productsWillBeDeleted: [], // The products selected for deletion
    productWillBeEdited: {}, // The product selected for editing
    filterProducts: [], // Filtered products based on user selection
    recentProducts: [], // The 3 most recently added products
    price_option: "All",
    price_option_show: "All",
  };

  // Get the context from the products form (to control edit form visibility)
  static contextType = productsFormContext;

  /* ============================ Helper Methods ============================ */

  // Turn ON error message
  start_wrong_massage = () => {
    this.setState((prev) => ({ ...prev, isWrong: true }));
  };

  // Turn OFF error message
  stop_wrong_massage = () => {
    this.setState((prev) => ({ ...prev, isWrong: false }));
  };

  // Turn ON loading indicator
  start_loading_massage = () => {
    this.setState((prev) => ({ ...prev, isLoading: true }));
  };

  // Turn OFF loading indicator
  stop_loading_massage = () => {
    this.setState((prev) => ({ ...prev, isLoading: false }));
  };

  // Reset pagination to the first page
  reset_current_page = () => {
    this.setState({ currentPage: 0 });
  };

  // Replace the entire products list (usually after fetching or loading from localStorage)
  updateProductsList = (data) => {
    this.setState((prev) => ({ productsList: data }));
  };

  // Add a new product to the list and update the recent products section
  addToList = (new_data) => {
    this.setState((prev) => ({
      productsList: [...this.state.productsList, new_data],
      recentProducts: [new_data, ...this.state.recentProducts.slice(0, 2)], // keep only last 3
      currentPage: this.state.numberOfPages - 1, // move to last page
    }));
    toast.success("The product has been added successfully");
  };

  // Calculate and update the total number of pages (6 items per page)
  updateTheNumberOfPages = () => {
    const numberOfPages = Math.ceil(this.state.filterProducts.length / 6);
    this.setState({ numberOfPages: numberOfPages });
  };

  // Get products for the current page (6 per page)
  updateProductsWillDispalyed = () => {
    const start = this.state.currentPage * 6;
    const end = start + 6;
    const myProducts = this.state.filterProducts.slice(start, end);
    this.setState((prev) => ({ productsWillDispalyed: myProducts }));
  };

  // Change the current page index (next or previous)
  updateCurrentPage = (operation) => {
    if (operation == "next") {
      if (this.state.currentPage < this.state.numberOfPages - 1) {
        this.setState({ currentPage: this.state.currentPage + 1 });
      }
    } else if (operation == "prev") {
      if (this.state.currentPage > 0) {
        this.setState({ currentPage: this.state.currentPage - 1 });
      }
    }
  };

  // Update start and end product numbers for pagination info (e.g., “Showing 7–12 of 30”)
  updateStartAndLastProductsNumber = () => {
    this.setState({ startProductNumber: this.state.currentPage * 6 });

    const last_number = this.state.currentPage * 6 + 6;
    if (last_number < this.state.filterProducts.length) {
      this.setState({ lastProductNumber: last_number });
    } else {
      this.setState({ lastProductNumber: this.state.filterProducts.length });
    }
  };

  // Delete selected products from the main and recent lists
  deleteProduct = () => {
    const deleteIds = new Set(
      this.state.productsWillBeDeleted.map((p) => p.id)
    );

    this.setState({
      productsList: this.state.productsList.filter((p) => !deleteIds.has(p.id)),
      recentProducts: this.state.recentProducts.filter(
        (p) => !deleteIds.has(p.id)
      ),
      productsWillBeDeleted: [],
    });

    toast.success("Product deleted successfully!");
  };

  // Show confirmation message before deleting a product
  show_confrimation_message = (...product_data) => {
    this.setState({ is_active_confirmation_message: true });
    this.setState({
      productsWillBeDeleted: [
        ...this.state.productsWillBeDeleted,
        ...product_data,
      ],
    });
  };

  // Hide the delete confirmation message and clear selection
  hide_confrimation_message = () => {
    this.setState({
      is_active_confirmation_message: false,
      productsWillBeDeleted: [],
    });
  };

  // Calculate the total price of all products
  getPriceOfAllProducts = () => {
    let price = 0;
    this.state.productsList.forEach((productData) => {
      price = price + +productData.price;
    });
    return price.toFixed(1);
  };

  // Set a specific product as the one to be edited
  setProductWillEdited = (productEdit) => {
    this.setState({ productWillBeEdited: productEdit });
  };

  // Modify an existing product in both the main and recent lists
  modifationProduct = (ProductDataEdited) => {
    this.setState((prev) => ({
      productsList: this.state.productsList.map((pro, index) => {
        if (pro.id === ProductDataEdited.id) {
          pro = {
            ...ProductDataEdited,
            price: Number.parseInt(ProductDataEdited.price),
            stock: Number.parseInt(ProductDataEdited.stock),
          };
          return pro;
        } else {
          return pro;
        }
      }),
      recentProducts: this.state.recentProducts.map((pro) => {
        if (pro.id === ProductDataEdited.id) {
          pro = {
            ...ProductDataEdited,
            price: Number.parseInt(ProductDataEdited.price),
            stock: Number.parseInt(ProductDataEdited.stock),
          };
          return pro;
        } else {
          return pro;
        }
      }),
    }));
    toast.success("The product has been successfully modified");
  };

  // Sort products alphabetically (A-Z or Z-A)
  sortProductsList = (sortOrder) => {
    const sortProducts = this.state.filterProducts.sort((a, b) => {
      if (sortOrder == "az") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder == "za") {
        return b.name.localeCompare(a.name);
      }
    });

    this.setState({ filterProducts: sortProducts });
    this.updateProductsWillDispalyed();
  };

  // Filter products by price range or show all
  updateFilterProducts = (filterOrder) => {
    this.setState({
      filterProducts: this.state.productsList.filter((pro) => {
        if (filterOrder == "All") {
          return pro;
        } else if (filterOrder == 501) {
          if (pro.price > 501) return pro;
        } else {
          if (pro.price >= filterOrder.start && pro.price <= filterOrder.end)
            return pro;
        }
      }),
    });
  };

  // Count how many products are low on stock (stock <= 10)
  getLowStockNumber = () => {
    let stockNumber = 0;
    this.state.productsList.forEach((pro) => {
      if (pro.stock <= 10) stockNumber += 1;
    });
    return stockNumber;
  };

  // Update the Option Range
  updateRangeOption = (order) => {
    this.setState({ price_option: order.value });
    this.setState({ price_option_show: order.show });
  };

  /* ========================= Data Fetching =========================*/

  // Fetch product data from a given URL (JSON file or API)
  FetchData = async (api_url) => {
    try {
      this.start_loading_massage(); // Show loading
      const req = await fetch(api_url);

      if (req.status === 200) {
        this.stop_wrong_massage(); // Clear error state
        const data = await req.json();
        this.updateProductsList(data); // Store products in state
        this.setState({
          recentProducts: data.slice(-3).reverse(), // Keep 3 recent products
        });
        this.setState({
          filterProducts: data,
        });
      }
    } catch (err) {
      // Handle any fetch errors
      this.stop_loading_massage();
      this.start_wrong_massage();
      throw Error("Something Went Wrong");
    } finally {
      // Always stop loading even if there’s an error
      this.stop_loading_massage();
    }
  };

  /* ============================ Lifecycle Methods ============================ */

  // Called after the component is first mounted
  componentDidMount() {
    // Check if products are already stored in localStorage
    if (localStorage.getItem("ProductsList")) {
      // Load products from localStorage instead of fetching again
      this.updateProductsList(JSON.parse(localStorage.getItem("ProductsList")));
      this.setState({
        recentProducts: JSON.parse(localStorage.getItem("ProductsList"))
          .slice(-3)
          .reverse(),
      });
      this.setState({
        filterProducts: JSON.parse(localStorage.getItem("ProductsList")),
      });
    } else {
      // Otherwise, fetch data from JSON file
      this.FetchData(this.api_url);
    }
  }

  // Called whenever state or props change
  componentDidUpdate(prevProps, PrevState) {
    // When products list changes, sync with localStorage and update pagination
    if (PrevState.productsList !== this.state.productsList) {
      localStorage.ProductsList = JSON.stringify(this.state.productsList);
      localStorage.RecentProducts = JSON.stringify(this.state.recentProducts);

      this.updateStartAndLastProductsNumber();
      this.updateProductsWillDispalyed();
    }

    // When the current page changes, refresh visible products
    if (PrevState.currentPage !== this.state.currentPage) {
      this.updateStartAndLastProductsNumber();
      this.updateProductsWillDispalyed();
    }

    // Recalculate number of pages and low-stock count when product list changes
    if (PrevState.productsList !== this.state.productsList) {
      this.updateTheNumberOfPages();
      this.getLowStockNumber();
      this.updateFilterProducts(this.state.price_option);
    }

    // When filtered products change, refresh page details and displayed products
    if (PrevState.filterProducts !== this.state.filterProducts) {
      this.updateTheNumberOfPages();
      this.updateStartAndLastProductsNumber();
      this.updateProductsWillDispalyed();
    }

    if (PrevState.numberOfPages !== this.state.numberOfPages) {
      if (this.state.numberOfPages == 0 || this.state.currentPage <= 0) {
        this.setState({ currentPage: 0 });
      } else if (
        this.state.currentPage == this.state.numberOfPages &&
        this.state.numberOfPages != 0
      ) {
        this.setState({ currentPage: this.state.numberOfPages - 1 });
      }
    }
  }

  /* ==================================== Render ==================================== */

  render() {
    // Get toggle function from form context to open/close edit form
    const { toggleEditProductFormActive } = this.context;

    // Prepare all values and functions to share via context
    const value = {
      ProductsList: this.state.productsList,
      filterProducts: this.state.filterProducts,
      isLoading: this.state.isLoading,
      isWrong: this.state.isWrong,
      productsWillDispalyed: this.state.productsWillDispalyed,
      currentPage: this.state.currentPage,
      numberOfPages: this.state.numberOfPages,
      startProductNumber: this.state.startProductNumber,
      lastProductNumber: this.state.lastProductNumber,
      is_active_confirmation_message: this.state.is_active_confirmation_message,
      productWillBeEdited: this.state.productWillBeEdited,
      toggleEditProductFormActive: toggleEditProductFormActive,
      recentProducts: this.state.recentProducts,
      price_option: this.state.price_option,
      price_option_show: this.state.price_option_show,
      addToList: this.addToList,
      updateCurrentPage: this.updateCurrentPage,
      show_confrimation_message: this.show_confrimation_message,
      hide_confrimation_message: this.hide_confrimation_message,
      deleteProduct: this.deleteProduct,
      getPriceOfAllProducts: this.getPriceOfAllProducts,
      setProductWillEdited: this.setProductWillEdited,
      modifationProduct: this.modifationProduct,
      sortProductsList: this.sortProductsList,
      updateFilterProducts: this.updateFilterProducts,
      getLowStockNumber: this.getLowStockNumber,
      reset_current_page: this.reset_current_page,
      updateRangeOption: this.updateRangeOption,
    };

    // Provide the data and methods to all child components
    return (
      <ProductsListContext.Provider value={value}>
        {this.props.children}
      </ProductsListContext.Provider>
    );
  }
}

export default ProductsListProvider;
