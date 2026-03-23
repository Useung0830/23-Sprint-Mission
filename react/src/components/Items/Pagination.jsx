import { useState, useEffect } from "react";
import styles from "./Pagination.module.css";
import arrowRight from "../../../../images/arrow_right.svg";
import arrowLeft from "../../../../images/arrow_left.svg";

function Pagination({ currentPage, onPageChange, totalCount, pageSize }) {
  const [pages, setPages] = useState([]);
  const pageLimit = 5;

  let totalPages = (totalCount / pageSize) | 0;
  if (totalCount % pageSize > 0) {
    totalPages += 1;
  }

  const remain = (currentPage - 1) % pageLimit;
  const startPage = currentPage - remain;

  useEffect(() => {
    const newPages = [];
    for (let i = 0; i < pageLimit; i++) {
      const pageNum = startPage + i;
      if (pageNum <= totalPages) {
        newPages.push(pageNum);
      }
    }
    setPages(newPages);
  }, [currentPage, totalCount, pageSize, startPage, totalPages]);

  const handlePrevGroup = () => {
    const prevGroupStart = startPage - pageLimit;
    if (prevGroupStart >= 1) {
      onPageChange(prevGroupStart);
    }
  };

  const handleNextGroup = () => {
    const nextGroupStart = startPage + pageLimit;
    if (nextGroupStart <= totalPages) {
      onPageChange(nextGroupStart);
    }
  };

  return (
    <ul className={styles.pagination}>
      <button
        className={styles.arrowBtn}
        disabled={startPage === 1}
        onClick={handlePrevGroup}
      >
        <img src={arrowLeft} alt="이전" />
      </button>

      {pages.map((num) => (
        <li
          key={num}
          className={`${styles.pageItem} ${currentPage === num ? styles.active : ""}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </li>
      ))}

      <button
        className={styles.arrowBtn}
        disabled={startPage + pageLimit > totalPages}
        onClick={handleNextGroup}
      >
        <img src={arrowRight} alt="다음" />
      </button>
    </ul>
  );
}

export default Pagination;
