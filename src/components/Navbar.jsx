import React, {useRef} from 'react'

const Navbar = ({ handleSearch }) => {

  const searchValue = useRef();

  return (
    <div>
      <h2>Logo</h2>
      <div>
        {/* <form onSubmit={handleSearch(searchValue)}> */}
        <form>
          <input ref={searchValue} type='text' name='input-search' id='input-search'></input>
          <button type='button' onClick={() => handleSearch(searchValue)}>Search</button>
          <input type='checkbox' name='match-search' id='match-search'></input>
          <label htmlFor='match-search'>Match exact search</label>
          <input type='checkbox' name='include-definition' id='include-definition'></input>
          <label htmlFor='include-definition'>Include definitions</label>
        </form>
      </div>
      <div>
        <button>My favs</button>
      </div>
    </div>
  )
}

export default Navbar