import React from "react";

class Search extends React.Component {
  state = {
    query: "",
  };

  onInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.afterSubmit(this.state.query);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.props.showSearchPage(false)}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*

            
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}

            <div className="search-bar ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={this.onInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}
export default Search;
