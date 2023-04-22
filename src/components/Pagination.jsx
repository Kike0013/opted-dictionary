import React from 'react'
import '../styles/Pagination.css'


export const Pagination = ({ prevPage, nextPage }) => {
    return (
        <div id='pagination-container'>
            <button className='btn-pagination' onClick={() => prevPage()}>&lt;</button>
            <button className='btn-pagination' onClick={() => nextPage()}>&gt;</button>
        </div>
    )
}
