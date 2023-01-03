import React from "react";
import { useEffect, useState, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Iconly } from "react-iconly";

const PaginationComponent = ({
  total = 0,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          onClick={() => onPageChange(i)}
          active={i === currentPage}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pages;
  }, [totalPages, currentPage]);

  if (totalPages === 0) return null;

  return (
    <Pagination className="pagination justify-content-left">
      <Iconly
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mt-1 pt-1"
        name="ChevronLeft"
        set="light"
        size="medium"
        color="#0B2239"
      />
      {paginationItems}
      <Iconly
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mt-1 pt-1"
        name="ChevronRight"
        set="light"
        size="medium"
        color="#0B2239"
      />
    </Pagination>
  );
};

export default PaginationComponent;
