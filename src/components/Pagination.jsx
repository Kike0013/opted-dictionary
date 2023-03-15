import React from 'react'

export const Pagination = ({ prevPage, nextPage }) => {
    return (
        <div>
            <button onClick={() => prevPage()}>Previous</button>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    )
}
