import React from "react";
import * as BooksAPI from "./BooksAPI";
import SearchButton from "./components/SearchButton";
import Search from "./components/Search";
import Shelves from "./components/Shelves";
import Header from "./components/Header";
import "./App.css";
//import Router from "./components/Route";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    eachBook: [],
  };

  showTheSearchPage = (value) => {
    this.setState({ showSearchPage: value });
  };

  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({ books: res });
    });
  }

  changeBookShelf = (book, shelf) => {
    this.setState({
      books: this.state.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf;
        }
        return b;
      }),
    });
  };

  onTermSubmit = (term) => {
    const response = BooksAPI.search(term);
    this.setState({
      eachBook: response,
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div>
            {/* <Router path="/search"> */}
            <Search
              afterSubmit={this.onTermSubmit}
              showSearchPage={this.showTheSearchPage}
              eachBook={this.state.eachBook}
            />
            {/* </Router> */}
          </div>
        ) : (
          <div className="list-books">
            <Header />
            <Shelves
              allBooks={this.state.books}
              changeShelf={this.changeBookShelf}
            />
            {/* <Router path="/"> */}
            <SearchButton showSearchPage={this.showTheSearchPage} />
            {/* </Router> */}
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
