import React from "react";

function OpenSearch(props) {
  return (
    <div className="open-search">
      <button
        onClick={() => props.handleSearchPage(true)}
        // onClick={() => this.setState({ showSearchPage: true })}
      >
        Add a book
      </button>
    </div>
  );
}

export default OpenSearch;
