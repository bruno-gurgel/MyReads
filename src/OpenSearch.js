import React from "react";
import { Link } from "react-router-dom";

/**
 * Component that shows/hide the search view with React Routing
 *
 * @component
 */
function OpenSearch() {
  return (
    <div className="open-search">
      <Link to="/search" className="open-search-button">
        Add a book
      </Link>
    </div>
  );
}

export default OpenSearch;
