import React, { useState } from 'react'

const BoardPagingnation = ({ totalPosts, limit, page, setPage }) => {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
// console.log({"currPage is":currPage, "firsNum is" : firstNum, "page is" : page})
  // console.log(numPages);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <div className="pagination justify-content-center">
          <div className={`page-item ${page === 1 && "disabled"}`}>
            <button
              className={`page-link`}
              onClick={() => {
                setPage(page - 1);
                setCurrPage(page-2);
              }}
              disabled={page === 1}
              tabIndex="-1"
            >
              Previous
            </button>
          </div>
          {/* {Array(numPages).map( */}
          {Array(5).fill().map(
            (_, i) => (
              // return (
              <div className="page-item" key={i + 1}>
                {" "}
                {i <4 ? (
                  <button
                    className="page-link"
                    onClick={() => setPage(i + 1)}
                    aria-current={page === firstNum + 1 + i ? "page" : null}
                  >
                    {/* {firstNum + 1 + i} */}
                    {firstNum + i}
                  </button>
                ) : (
                  /*
                        i > 4 일때
                      */
                  <button
                    className="page-link"
                    onClick={() => setPage(lastNum)}
                    aria-current={page === lastNum ? "page" : null}
                  >
                    {lastNum}
                  </button>
                )}
              </div>
            )
            // )
          )}
          <div className={`page-item ${page === numPages && "disabled"}`}>
            <button
              className={`page-link`}
              onClick={() => {
                setPage(page + 1);
                setCurrPage(page + 1);
              }}
              disabled={page === numPages}
              // tabindex="-1"
            >
              Next
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BoardPagingnation