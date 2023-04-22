import React from 'react'
import '../styles/ResultsContainer.css'
// import Results from './Results';
// import NotFound from './NotFound';

const ResultsContainer = ({ children }) => {

    return (
        <div id='results-container'>
            {children}
        </div>
    )
}

export default ResultsContainer