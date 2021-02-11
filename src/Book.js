import React from "react";
import ShelfsControl from "./ShelfsControl";

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
        <ShelfsControl />
      </div>
      <div className="book-title">{props.bookTitle}</div>
      <div className="book-authors">{props.bookAuthor}</div>
    </div>
  );
}

export default Book;
