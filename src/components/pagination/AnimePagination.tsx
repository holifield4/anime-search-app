import { ArrowLeft } from "../../lib/icons/ArrowLeft";
import { ArrowRight } from "../../lib/icons/ArrowRight";
import type { Pagination } from "../../types/anime.types";

interface PaginationProps {
  pagination: Pagination;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

const AnimePagination = ({ pagination, onPageChange, isLoading }: PaginationProps) => {
  const { last_visible_page, current_page, has_next_page } = pagination;

  if (last_visible_page <= 1) return null;

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, current_page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(last_visible_page, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < last_visible_page) {
      if (endPage < last_visible_page - 1) pages.push("...");
      pages.push(last_visible_page);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const arrowClasses = "flex items-center justify-center w-10 h-10 rounded-full bg-ios-primary hover:bg-ios-blue-2 disabled:hover:bg-ios-primary hover:text-ios-primary disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 cursor-pointer disabled:text-ios-label-secondary"

  return (
    <div className="flex items-center justify-center space-x-2 py-6 text-ios-label-secondary">
      {/* previous page */}
      <button
        onClick={() => onPageChange(current_page - 1)}
        disabled={current_page === 1 || isLoading}
        className={arrowClasses}
        aria-label="Previous page"
      >
        <ArrowLeft />
      </button>

      {/* page no */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              disabled={isLoading}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-medium transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${
                page === current_page
                  ? "bg-ios-blue text-ios-primary shadow-ios-sm"
                  : "bg-ios-primary hover:bg-ios-blue-2 hover:text-ios-primary disabled:bg-ios-primary disabled:text-ios-label-secondary"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={`ellipsis-${index}`} className="px-2 text-ios-label-primary dark:text-dark-label transition-colors">
              {page}
            </span>
          )
        )}
      </div>

      {/* next page */}
      <button
        onClick={() => onPageChange(current_page + 1)}
        disabled={!has_next_page || isLoading}
        className={arrowClasses}
        aria-label="Next page"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default AnimePagination;
