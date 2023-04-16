import React from 'react'
import logo from '../assets/logo.svg'
import "../styles/Navbar.css"

const Navbar = ({ handleSearch, searchValue, exactValue, defValue }) => {

  return (
    <div id='navbar-container'>
      <div>
        <img id='logo-img' src={logo} alt='OPTED Dictionary' />
      </div>
      <div id='form-container'>
        <form id="main-form" onSubmit={(e) => handleSearch(searchValue, exactValue.current.checked, defValue.current.checked, e)}>
          <input ref={searchValue} type='text' name='input-search' id='input-search'></input>
          <button type='button' id="search-btn" onClick={(e) => {
            handleSearch(searchValue, exactValue.current.checked, defValue.current.checked, e)
          }}>
            Search
          </button>
          <div>
            <input ref={exactValue} type='checkbox' name='match-search' id='match-search'
              onChange={(e) => {
                defValue.current.checked = false;
                handleSearch(searchValue, e.target.checked, defValue.current.checked)
              }}
            >
            </input>
            <label htmlFor='match-search'>Search exact word</label>
          </div>
          <div>
            <input ref={defValue} type='checkbox' name='include-definition' id='include-definition'
              onChange={(e) => {
                exactValue.current.checked = false;
                handleSearch(searchValue, exactValue.current.checked, e.target.checked)
              }}
            >
            </input>
            <label htmlFor='include-definition'>Search in definitions</label>
          </div>
        </form>
      </div>
      {/* <div>
        <button>My favs</button>
      </div> */}
    </div>
  )
}

export default Navbar