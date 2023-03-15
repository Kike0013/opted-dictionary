import React from 'react'
import { VariableSizeList as List } from 'react-window'

const ResultsContainer = ({ currentData, page }) => {

    const rowHeights = new Array(currentData.length)
        .fill(100)

    const getItemSize = index => rowHeights[index];

    const Result = ({ index, style }) => (
        <div style={style}>
            <h3>
                {currentData[index + (page * 10)].word}
            </h3>
            <h4>
                {currentData[index + (page * 10)].definition}
            </h4>
            <br />
        </div>
    );

    return (
        <div>
            <List
                height={600}
                itemCount={
                    currentData.length - (page * 10) >= 10
                        ? 10
                        : currentData.length % 10}
                itemSize={getItemSize}
                width={'100%'}
            >
                {Result}
            </List>
        </div>
    )
}

export default ResultsContainer