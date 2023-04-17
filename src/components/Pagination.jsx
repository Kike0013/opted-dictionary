import React from 'react'
import '../styles/Pagination.css'


export const Pagination = ({ prevPage, nextPage }) => {
    return (
        <div id='pagination-container'>
            <button onClick={() => prevPage()}>&lt;</button>
            <button onClick={() => nextPage()}>&gt;</button>
        </div>
    )
}
