import React from 'react'
import { FixedSizeList as List } from 'react-window'
import '../styles/Results.css'

const ResultsContainer = ({ currentData, page }) => {

    const Result = ({ index, style }) => (
        <div style={style} className='result-card'>
            <div>
                <h3 className='word'>
                    {currentData[index + (page * 10)].word}
                </h3>
                <h4 className='definition'>
                    {currentData[index + (page * 10)].definition}
                </h4>
            </div>
        </div>
    );

    return (
        <div id='results-container'>
            <List
                height={600}
                itemCount={
                    currentData.length - (page * 10) >= 10
                        ? 10
                        : currentData.length % 10}
                itemSize={90}
                width={'100%'}
            >
                {Result}
            </List>
        </div>
    )
}

export default ResultsContainer