import React, { useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import Home from './Home';
import Modal from './Modal';

const Results = ({ currentData, page }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [modalIndex, setModalIndex] = useState(0)

    const handleModalData = e => {
        setModalIndex(Number(e.target.id))
        setIsOpen(true)
    }

    const result = ({ index, style }) => (
        <div style={style} className='result-card'>
            <div>
                {/* <div style={{display: 'flex'}}> */}
                <h3 id={index} className='word' onClick={handleModalData}>
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
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h3>{currentData[(modalIndex + (page * 10))]?.word}</h3>
                <h3>{currentData[modalIndex + (page * 10)]?.definition}</h3>
            </Modal>
        </>
    )
}

export default Results