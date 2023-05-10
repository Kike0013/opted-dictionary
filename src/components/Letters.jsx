import React from 'react'
import '../styles/Letters.css'

const Letters = ({ searchByLetter, isSelected }) => {

    const AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const letters = AZ.map((letter) => { return { label: letter, value: letter } })

    return (
        <div id='letters-container'>
            {letters.map((el, i) => {
                return <div className={`letter${isSelected === el.label ? ' active' : ''}`} key={i} onClick={() => searchByLetter(el.label)}>
                    <p><b>{el.label}</b></p>
                </div>
            })}</div>
    )
}

export default Letters