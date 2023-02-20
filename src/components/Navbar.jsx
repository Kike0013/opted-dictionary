import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h2>Logo</h2>
      <div>
        <form>
          <input></input>
          <button>Search</button>
          <input type='checkbox' id='match-search'></input>
          <label htmlFor='match-search'>Match exact search</label>
          <input type='checkbox' id='include-definition'></input>
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