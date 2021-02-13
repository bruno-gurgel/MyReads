import React from "react";
import ShelfsControl from "./ShelfsControl";
import PropTypes from "prop-types";

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.backgroundURL})`,
          }}
        ></div>
        <ShelfsControl
          shelf={props.shelf}
          book={props.book}
          updateShelf={props.updateShelf}
        />
      </div>
      <div className="book-title">{props.bookTitle}</div>
      <div className="book-authors">{props.bookAuthor}</div>
    </div>
  );
}

Book.propTypes = {
  backgroundURL: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
  updateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
};

export default Book;
