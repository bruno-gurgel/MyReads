import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

function Search(props) {
  const [query, updateQuery] = useState("");
  const [booksResultsArray, updateBooksResultsArray] = useState([]);
  const [areThereResults, updateAreThereResults] = useState(true);

  useEffect(() => {
    if (!query) {
      updateBooksResultsArray([]);
      updateAreThereResults(false);
    } else {
      BooksAPI.search(query).then((searchResults) => {
        if (searchResults?.length > 0) {
          updateBooksResultsArray(searchResults);
          updateAreThereResults(true);
        } else {
          updateBooksResultsArray([]);
          updateAreThereResults(false);
        }
      });
    }
  }, [query]);

  const checkShelf = (book) => {
    return (
      props.booksArray?.find((item) => item.id === book.id)?.shelf ?? "none"
    );
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query &&
            booksResultsArray?.map((book) => {
              const bookShelf = checkShelf(book);
              return (
                <li key={book.id}>
                  <Book
                    backgroundURL={
                      book.imageLinks ? book.imageLinks.thumbnail : ""
                    }
                    bookTitle={book.title}
                    bookAuthor={book.authors || ""}
                    shelf={bookShelf}
                    book={book}
                    updateShelf={props.updateShelf}
                  />
                </li>
              );
            })}
        </ol>
        {!areThereResults && query && (
          <h1 className="search-book-error">
            Search did not return any books.
          </h1>
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  booksArray: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default Search;
