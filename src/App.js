import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import OpenSearch from "./OpenSearch";
import Search from "./Search";
import Shelfs from "./Shelfs";

function BooksApp() {
  const [didMount, setDidMount] = useState(false);
  const [booksObject, handleBooks] = useState([{}]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      handleBooks((prevState) => ({
        ...prevState,
        currentlyReading: books.filter(
          (book) => book.shelf === "currentlyReading"
        ),
      }));
      handleBooks((prevState) => ({
        ...prevState,
        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
      }));
      handleBooks((prevState) => ({
        ...prevState,
        read: books.filter((book) => book.shelf === "read"),
      }));
      setDidMount(true);
    });
  }, []);
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  const [showSearchPage, handleSearchPage] = useState(false);
  return (
    <div className="app">
      {showSearchPage ? (
        <Search handleSearchPage={handleSearchPage} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {didMount && <Shelfs booksObject={booksObject} />}
          </div>
          <OpenSearch handleSearchPage={handleSearchPage} />
        </div>
      )}
    </div>
  );
}

export default BooksApp;
