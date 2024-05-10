import React from 'react';

const ItemsPagination = ({pageArray, setCurrentPage, currentPage}) => {
    return (
        <div className="my-5  flex justify-center items-center gap-5">
            {/* {
                pageArray?.map((page, index) => <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={`btn ${index === currentPage ? 'bg-purple-700 ' :""} `}
                >{page}</button>)
            } */}
        </div>
    );
};

export default ItemsPagination;