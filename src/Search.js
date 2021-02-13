import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

function Search(props) {
  const [query, updateQuery] = useState("");
  const [booksResults, updateBooksResults] = useState([]);
  const [results, updateResults] = useState(true);

  const handleQuery = (event) => {
    const input = event.target.value;
    updateQuery(input);

    if (!input) {
      updateBooksResults([]);
      updateResults(false);
    } else {
      BooksAPI.search(query).then((searchResults) => {
        searchResults?.length > 0
          ? updateBooksResults(searchResults) && updateResults(true)
          : updateBooksResults([]) && updateResults(false);
      });
    }
  };

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
            onChange={(event) => handleQuery(event)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query &&
            booksResults?.map((book) => {
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
        {!results && query && (
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
};

export default Search;
