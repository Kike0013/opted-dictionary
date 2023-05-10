import React from 'react'
import logo from '../../public/assets/logo-text.svg'
import "../styles/Navbar.css"
import ContactCard from './ContactCard'

const Navbar = ({ handleSearch, searchValue, exactValue, defValue }) => {

  return (
    <div id='navbar-container'>
      <div id='logo-container'>
        <img id='logo-text' src={logo} alt='OPTED Dictionary' />
      </div>
      <div id='form-container'>
        <form id="main-form" onSubmit={(e) => handleSearch(searchValue, exactValue.current.checked, defValue.current.checked, e)}>
          <div id='search-box-button'>
            <input ref={searchValue} type='text' name='input-search' id='input-search'></input>
            <button type='button' id="search-btn" onClick={(e) => {
              handleSearch(searchValue, exactValue.current.checked, defValue.current.checked, e)
            }}>
              Search
            </button>
          </div>
          <div id='filters'>
            <div id='match-container'>
              <input ref={exactValue} type='checkbox' name='match-search' id='match-search'
                onChange={(e) => {
                  defValue.current.checked = false;
                  handleSearch(searchValue, e.target.checked, defValue.current.checked)
                }}
              >
              </input>
              <label id='match-search-label' htmlFor='match-search'>Search exact word</label>
            </div>
            <div id='include-container'>
              <input ref={defValue} type='checkbox' name='include-definition' id='include-definition'
                onChange={(e) => {
                  exactValue.current.checked = false;
                  handleSearch(searchValue, exactValue.current.checked, e.target.checked)
                }}
              >
              </input>
              <label id='include-definition-label' htmlFor='include-definition'>Search in definitions</label>
            </div>
          </div>
        </form>
      </div>
      <ContactCard />
    </div>
  )
}

export default Navbar