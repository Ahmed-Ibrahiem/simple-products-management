import { Component } from "react";
import "./SearchBox.css";
import { ProductsListContext } from "../../Context/ProductsListContext";

class SearchBox extends Component {
  static contextType = ProductsListContext;

  state = {
    is_search_list_active: false,
    search_result_list: [],
  };

  open_search_List = () => {
    this.setState({ is_search_list_active: true });
  };

  close_search_List = () => {
    this.setState({ is_search_list_active: false });
  };

  live_search = (e) => {
    const { ProductsList } = this.context;

    if (e.target.value.trim() !== "") {
      this.open_search_List();
      this.setState({
        search_result_list: ProductsList.filter((pro) =>
          pro.name.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      });
    } else {
      this.setState({ search_result_list: [] });
    }
  };

  render() {
    return (
      <div className="search_box box">
        <label htmlFor="search"> Search</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          onBlur={this.close_search_List}
          onChange={(e) => {
            this.live_search(e);
          }}
        />
        {this.state.is_search_list_active && (
          <div className="search_result">
            {this.state.search_result_list.length === 0 ? (
              <p className="no_result">---- no result ----</p>
            ) : (
              <div className="result">
                {this.state.search_result_list.map((pro) => {
                  return <span key={pro.id}>{pro.name}</span>;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBox;
