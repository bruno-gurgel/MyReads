import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function Shelfs(props) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksArray.map(
              (book) =>
                book.shelf === "currentlyReading" && (
                  <li key={book.id}>
                    <Book
                      backgroundURL={book.imageLinks.thumbnail}
                      bookTitle={book.title}
                      bookAuthor={book.authors}
                      bookID={book.id}
                      shelf={book.shelf}
                      book={book}
                      updateShelf={props.updateShelf}
                    />
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksArray.map(
              (book) =>
                book.shelf === "wantToRead" && (
                  <li key={book.id}>
                    <Book
                      backgroundURL={book.imageLinks.thumbnail}
                      bookTitle={book.title}
                      bookAuthor={book.authors}
                      bookID={book.id}
                      shelf={book.shelf}
                      book={book}
                      updateShelf={props.updateShelf}
                    />
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksArray.map(
              (book) =>
                book.shelf === "read" && (
                  <li key={book.id}>
                    <Book
                      backgroundURL={book.imageLinks.thumbnail}
                      bookTitle={book.title}
                      bookAuthor={book.authors}
                      bookID={book.id}
                      shelf={book.shelf}
                      book={book}
                      updateShelf={props.updateShelf}
                    />
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

Shelfs.propTypes = {
  booksArray: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Shelfs;
