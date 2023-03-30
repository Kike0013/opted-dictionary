import React, { useRef } from 'react'

const Navbar = ({ handleSearch }) => {

  const searchValue = useRef();
  const exactValue = useRef();
  const defValue = useRef();

  return (
    <div>
      <h2>Logo</h2>
      <div>
        <form onSubmit={(e) => handleSearch(searchValue, exactValue.current.checked, defValue.current.checked, e)}>
          <input ref={searchValue} type='text' name='input-search' id='input-search'></input>
          <button type='button' onClick={(e) => {
            handleSearch(searchValue, exactValue.current.checked, defValue.current.checked, e)
          }}>
            Search
          </button>
          <input ref={exactValue} type='checkbox' name='match-search' id='match-search'
            onChange={(e) => {
              defValue.current.checked = false;
              handleSearch(searchValue, e.target.checked, defValue.current.checked)
            }}
          >
          </input>
          <label htmlFor='match-search'>Search exact word</label>
          <input ref={defValue} type='checkbox' name='include-definition' id='include-definition'
            onChange={(e) => {
              exactValue.current.checked = false;
              handleSearch(searchValue, exactValue.current.checked, e.target.checked)
            }}
          >
          </input>
          <label htmlFor='include-definition'>Search in definitions</label>
        </form>
      </div>
      <div>
        <button>My favs</button>
      </div>
    </div>
  )
}

export default Navbar