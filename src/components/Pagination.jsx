import React from 'react'
import '../styles/Pagination.css'


export const Pagination = ({ prevPage, nextPage, searchValue }) => {
    return (
        <>
            {
                searchValue
                    ? <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <h3 style={{
                            margin: '0px 0px 5px 0px'
                        }}>Searching: {searchValue}</h3>
                    </div>
                    : null
            }
            <div id='pagination-container'>
                <button className='btn-pagination' onClick={() => prevPage()}>&lt;</button>
                <button className='btn-pagination' onClick={() => nextPage()}>&gt;</button>
            </div>
        </>
    )
}
