import React from 'react'
import '../styles/Pagination.css'


export const Pagination = ({ firstPage, prevPage, nextPage, lastPage, page, searchValue, show, length }) => {
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
            {
                !show
                    ? null
                    : <div>
                        <div id='pagination-container'>
                            <button className='btn-pagination' onClick={() => firstPage()}>|&lt;</button>
                            <button className='btn-pagination' onClick={() => prevPage()}>&lt;</button>
                            <button className='btn-pagination' onClick={() => nextPage()}>&gt;</button>
                            <button className='btn-pagination' onClick={() => lastPage()}>&gt;|</button>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <h3>Page {page} of {length}</h3>
                        </div>
                    </div>
            }
        </>
    )
}
