import React from "react";
import ShelfsControl from "./ShelfsControl";
import PropTypes from "prop-types";

/**
 * Component that renders each book and handles its information.
 *
 * @component
 */
function Book(props) {
  const {
    backgroundURL,
    shelf,
    book,
    updateShelf,
    bookTitle,
    bookAuthor,
  } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundURL})`,
          }}
        ></div>
        <ShelfsControl shelf={shelf} book={book} updateShelf={updateShelf} />
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthor}</div>
    </div>
  );
}

Book.propTypes = {
  /**
   * Link to the cover of the book.
   */
  backgroundURL: PropTypes.string.isRequired,
  /**
   * The book's title.
   */
  bookTitle: PropTypes.string.isRequired,
  /**
   * The book's author(s)
   */
  bookAuthor: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
  /**
   * The function that updates the shelf when the user moves the book. ---- Will be passed to ShelfsControl component.
   */
  updateShelf: PropTypes.func.isRequired,
  /**
   * The shelf that the book belongs
   */
  shelf: PropTypes.string.isRequired,
  /**
   * The book object itself.
   */
  book: PropTypes.object.isRequired,
};

export default Book;
