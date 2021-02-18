import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

/**
 * Component that handles all of the shelfs and renders it.
 *
 * @component
 */
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
                      backgroundURL={
                        book.imageLinks ? book.imageLinks.thumbnail : ""
                      }
                      bookTitle={book.title}
                      bookAuthor={book.authors}
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
                      backgroundURL={
                        book.imageLinks ? book.imageLinks.thumbnail : ""
                      }
                      bookTitle={book.title}
                      bookAuthor={book.authors}
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
                      backgroundURL={
                        book.imageLinks ? book.imageLinks.thumbnail : ""
                      }
                      bookTitle={book.title}
                      bookAuthor={book.authors}
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
  /**
   * The array of books that are on the shelf
   */
  booksArray: PropTypes.array.isRequired,
  /**
   * The function that updates the shelf when the user moves the book. ---- Will be passed to ShelfsControl component.
   */
  updateShelf: PropTypes.func.isRequired,
};

export default Shelfs;
