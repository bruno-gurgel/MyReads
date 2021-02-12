import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

function Search(props) {
  const [query, updateQuery] = useState("");
  const [booksResults, updateBooksResults] = useState([]);

  const handleQuery = (event) => {
    updateQuery(event.target.value);

    try {
      BooksAPI.search(query).then((searchResults) =>
        updateBooksResults(searchResults)
      );
    } catch (error) {
      console.log(error);
    }
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
            onChange={(event) => handleQuery(event)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query && booksResults && !booksResults.error ? (
            booksResults.map((book) => (
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
            ))
          ) : query && booksResults ? (
            <p className="error-text">
              There are no results for your query:
              <span className="error-span">"{query}"</span>
            </p>
          ) : (
            ""
          )}
        </ol>
      </div>
    </div>
  );
}

Search.propTypes = {
  booksArray: PropTypes.array.isRequired,
};

export default Search;
