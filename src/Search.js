import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";

function Search(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}

Search.propTypes = {
  booksArray: PropTypes.array.isRequired,
};

export default Search;
