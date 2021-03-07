import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Component that handles the  Book's Shelf control.
 *
 * @component
 */
function ShelfsControl(props) {
  const { book, shelf, updateShelf } = props;

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
  /**
   * Handles the selection of the new shelf, calling the function that updates it.
   * @param   {event} event The event itself.
   * @return  {undefined}        Nothing.
   */
  const handleShelfControl = (event) => {
    const shelf = event.target.value;

    updateShelf(book, shelf);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleShelfControl} value={shelf}>
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
  /**
   * The book object itself.
   */
  book: PropTypes.object.isRequired,
  /**
   * The shelf that the book belongs
   */
  shelf: PropTypes.string,
  /**
   * The function that updates the shelf when the user moves the book. ---- Will be passed to ShelfsControl component.
   */
  updateShelf: PropTypes.func.isRequired,
};

export default ShelfsControl;
