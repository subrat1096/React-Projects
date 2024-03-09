// import React from 'react'
import PropTypes from "prop-types";
function Pagination({ next, prev }) {
  return (
    <div className="flex mx-10 mt-8 justify-between">
      {prev && (
        <button
          className="font-bold px-6 py-2 rounded-lg outline"
          onClick={prev}
        >
          Prev
        </button>
      )}
      {next && (
        <button
          className="font-bold px-6 py-2 rounded-lg outline"
          onClick={next}
        >
          Next
        </button>
      )}
    </div>
  );
}
Pagination.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};
export default Pagination;
