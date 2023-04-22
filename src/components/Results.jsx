import React from 'react'
import { FixedSizeList as List } from 'react-window'
import Home from './Home';

const Results = ({ currentData, page }) => {

    const result = ({ index, style }) => (
        <div style={style} className='result-card'>
            <div>
                {/* <div style={{display: 'flex'}}> */}
                <h3 className='word'>
                    {currentData[index + (page * 10)].word}
                </h3>
                {/* <p>{currentData[index + (page * 10)].type}</p> */}
                {/* </div> */}
                <h4 className='definition'>
                    {currentData[index + (page * 10)].definition}
                </h4>
            </div>
        </div>
    );

    return (
        <>
            {!currentData.length
                ? <Home />
                : <List
                    height={600}
                    itemCount={
                        currentData.length - (page * 10) >= 10
                            ? 10
                            : currentData.length % 10}
                    itemSize={90}
                    width={'100%'}
                >
                    {result}
                </List>}
        </>
    )
}

export default Results