import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import OpenSearch from "./OpenSearch";
import Search from "./Search";
import Shelfs from "./Shelfs";
import { Route } from "react-router-dom";

/**
 * Main component of the application
 *
 * @component
 * )
 */
function App() {
  const [didMount, setDidMount] = useState(false);
  const [booksArray, handleBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      handleBooks(books);
      setDidMount(true);
    });
  }, []);

  /**
   * Updates the shelfs when an user moves the book ----------- Used in the ShelfsControl component.
   * @param   {object} bookToUpdate The book that will have it's shelf updated.
   * @param   {string} shelfToUpdate The destination's shelf.
   * @return  {undefined} Only updates the shelfs, does not return anything.
   */
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

export default App;
