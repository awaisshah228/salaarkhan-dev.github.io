import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../hooks/usePagination";
import styled from "styled-components";

const CustomPagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber, id) => {
          if (pageNumber === DOTS) {
            return (
              <li key={id} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={id}
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default CustomPagination;

const PaginationContainer = styled.div`
  display: flex;
  .pagination-container {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    flex-wrap: wrap;

    .pagination-item {
      display: flex;
      height: 32px;
      text-align: center;
      margin: auto 4px;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.secondary};
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.01071em;
      border-radius: 16px;
      font-size: 13px;
      min-width: 32px;

      &.dots:hover {
        background-color: transparent;
        cursor: default;
      }
      &:hover {
        background-color: ${({ theme }) => theme.primary}dd;
        cursor: pointer;
      }

      &.selected {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.grey[100]}dd;
      }

      .arrow {
        &::before {
          position: relative;
          content: "";
          /* By using an em scale, the arrows will size with the font */
          display: inline-block;
          width: 0.5em;
          height: 0.5em;
          border-right: 0.12em solid ${({ theme }) => theme.secondary}dd;
          border-top: 0.12em solid ${({ theme }) => theme.secondary}dd;
        }

        &.left {
          transform: rotate(-135deg);
        }

        &.right {
          transform: rotate(45deg);
        }
      }

      &.disabled {
        pointer-events: none;

        .arrow::before {
          border-right: 0.12em solid ${({ theme }) => theme.secondary}6d;
          border-top: 0.12em solid ${({ theme }) => theme.secondary}6d;
        }

        &:hover {
          background-color: transparent;
          cursor: default;
        }
      }
    }
  }
`;
