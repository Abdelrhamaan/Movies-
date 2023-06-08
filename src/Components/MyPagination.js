import React from 'react'
import ReactPaginate from 'react-paginate'

const MyPagination = ({ getCurrentPage, pageCount }) => {
    const handlePageClick = (data) => {
        // ---indexing of element starts from 0 so we add 1----
        console.log(data.selected + 1);
        // ---passing page number to func ---
        getCurrentPage(data.selected + 1)
    }
    console.log(pageCount);

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالي "
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="السابق"
                //---- make pagination container styling from react pagination ----
                // --- you shoulf first install react-paginate -----
                containerClassName={'pagination justify-content-center p-5'}
                pageClassName={'page-item'}
                pageLinkClassName={"page-link"}
                previousLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
            {/* <Pagination className={"justify-content-center p-4"}>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{pageCount}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination> */}
        </>
    )
}

export default MyPagination
