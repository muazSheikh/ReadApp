import React from "react";
import Shelf from "./Shelf";

class Shelves extends React.Component {
  render() {
    const allBooks = this.props.allBooks;
    const currentlyReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
    const read = allBooks.filter((book) => book.shelf === "read");

    return (
      <div className="list-books-content">
        <div>
          <Shelf
            changeShelf={this.props.changeShelf}
            Books={currentlyReading}
            name="Currently Reading"
          />
          <Shelf
            changeShelf={this.props.changeShelf}
            Books={wantToRead}
            name="Want to Read"
          />
          <Shelf
            changeShelf={this.props.changeShelf}
            Books={read}
            name="Read"
          />
        </div>
      </div>
    );
  }
}

export default Shelves;
