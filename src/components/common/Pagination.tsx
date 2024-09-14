import React from "react";
import styles from "@/styles/common/pagination.module.scss";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onChangePage: (page: number) => void;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onChangePage, onPrevPage, onNextPage }) => {

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button key={i}
                    className={`${styles.pageButton} ${i === currentPage ? styles.active : ''}`}
                    onClick={() => onChangePage(i)}>
                    {i}
                </button>
            );
        }
        return pages;
    };
    return (
        <div className={styles.pagination}>
            <button className={styles.pageButton}
                onClick={onPrevPage}
                disabled={currentPage === 1}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7H1M1 7L7 13M1 7L7 1" stroke="#68686D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
            {renderPageNumbers()}
            <button className={styles.pageButton}
                onClick={onNextPage}
                disabled={currentPage === totalPages}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H13M13 7L7 13M13 7L7 1" stroke="#68686D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
        </div>
    );
}