import React from "react";
import Book from "./Book";
//import * as BooksAPI from "./BooksAPI";

function Shelfs(props) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksObject.currentlyReading.map((book) => (
              <li key={book.id}>
                <Book
                  backgroundURL={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksObject.wantToRead.map((book) => (
              <li key={book.id}>
                <Book
                  backgroundURL={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksObject.read.map((book) => (
              <li key={book.id}>
                <Book
                  backgroundURL={book.imageLinks.thumbnail}
                  bookTitle={book.title}
                  bookAuthor={book.authors}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Shelfs;
