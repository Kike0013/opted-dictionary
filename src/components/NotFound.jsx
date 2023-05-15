import React from 'react'
import notFound from '../assets/not-found.svg'
import '../styles/NotFound.css'

const NotFound = () => {
  return (
    <div id='notfound-div'>
      <img id='notfound-img' src={notFound} alt='Results not found' />
      <h3>Sorry, we didn't find any results with your search!</h3>
      <p>Please try with another search or filters</p>
    </div>
  )
}

export default NotFound