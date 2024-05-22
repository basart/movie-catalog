import { memo, useMemo } from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  currentPage,
  pageNumbers,
  onChange,
}: {
  currentPage: number;
  pageNumbers: number;
  onChange?: (page: number) => void;
}) => {
  const pageNumberList = useMemo(
    () => [...Array(pageNumbers).keys()].map((item) => (item = item + 1)),
    [pageNumbers]
  );

  return (
    <nav>
      <ol className={styles.pagination}>
        {pageNumberList.map((page) => (
          <li
            key={page}
            className={`cursor-pointer ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => onChange?.(page)}
          >
            {page}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default memo(Pagination);
