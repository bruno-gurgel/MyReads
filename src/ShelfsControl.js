import React, { useState } from "react";
import PropTypes from "prop-types";

function ShelfsControl(props) {
  const [selectedItem, updateSelectedItem] = useState(props.shelf);
  const [options] = useState([
    {
      name: "Move to...",
      value: null,
      disabled: true,
    },
    {
      name: "Currently Reading",
      value: "currentlyReading",
      disabled: false,
    },
    {
      name: "Want to Read",
      value: "wantToRead",
      disabled: false,
    },
    {
      name: "Read",
      value: "read",
      disabled: false,
    },
    {
      name: "None",
      value: "none",
      disabled: false,
    },
  ]);
  const handleShelfControl = (event) => {
    const shelf = event.target.value;
    const book = props.book;

    updateSelectedItem(shelf);

    props.updateShelf(book, shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleShelfControl} value={selectedItem || "none"}>
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

ShelfsControl.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string,
  updateShelf: PropTypes.func.isRequired,
};

export default ShelfsControl;
