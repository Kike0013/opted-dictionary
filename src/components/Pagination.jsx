import React from 'react'
import '../styles/Pagination.css'


export const Pagination = ({ prevPage, nextPage }) => {
    return (
        <div id='pagination-container'>
            <button onClick={() => prevPage()}>Previous</button>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    )
}
