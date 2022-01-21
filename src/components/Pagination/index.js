import React from "react";
import "./styles.css";
const Pagination = ({ currentPage, pageSize, total, setFilters }) => {
  const PageCount = [...Array(Math.ceil(total / pageSize)).keys()];
  function changePage(event) {
    const value = event;
    setFilters((pre) => ({
      ...pre,
      ["page"]: value,
    }));
  }

  return (
    <div className="pagination_custom">
      {PageCount.map((item, index) => (
        <button
          key={index}
          onClick={() => changePage(item + 1)}
          className={`paginationItem ${
            currentPage === item + 1 ? "active" : null
          }`}
        >
          <span>{item + 1}</span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
