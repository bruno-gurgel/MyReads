import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import OpenSearch from "./OpenSearch";
import Search from "./Search";
import Shelfs from "./Shelfs";
import { Route } from "react-router-dom";

function BooksApp() {
  const [didMount, setDidMount] = useState(false);
  const [booksArray, handleBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      handleBooks(books);
      setDidMount(true);
    });
  }, []);

  const updateBookShelf = async (bookToUpdate, shelfToUpdate) => {
    await BooksAPI.update(bookToUpdate, shelfToUpdate).then(
      async (updatedShelf) => {
        const changeToArray = Object.values(updatedShelf).flat();
        const booksInfoArray = await Promise.all(
          changeToArray.map((bookID) => BooksAPI.get(bookID))
        );
        handleBooks(booksInfoArray);
        setDidMount(true);
      }
    );
  };

  return (
    <div className="app">
      <Route
        path="/search"
        render={() => (
          <Search booksArray={booksArray} updateShelf={updateBookShelf} />
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {didMount && (
                <Shelfs booksArray={booksArray} updateShelf={updateBookShelf} />
              )}
            </div>
            <OpenSearch />
          </div>
        )}
      />
    </div>
  );
}

export default BooksApp;
