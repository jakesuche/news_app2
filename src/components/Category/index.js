import React from "react";
import styles from "./styles.module.css";
const categorylist = [
  'politics',
  "Business",
  "Entertainment",
  "Health",
  "Technology",
  "Science",
  "Sports",
  
];

const Category = ({ setFilters, filters }) => {
  const selectCategory = (item) => {
    const cate = item.toLowerCase();
    setFilters({ ...filters, ["category"]: cate });
  };
  return (
    <div
      style={{ height: "100%" }}
      className="col-lg-3 stretch-card grid-margin"
    >
      <div className="card">
        <div className="card-body text-left">
          <h2>Category</h2>
          <ul className={styles.vertical_menu}>
            {categorylist.map((item, i) => {
              return (
                <li className={styles.selected_cate } key={i}>
                  <a 
                    onClick={() => selectCategory(item)}
                    className={`${styles.action}  ${filters.category === item.toLowerCase() ? styles.selected_cate : ''}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
