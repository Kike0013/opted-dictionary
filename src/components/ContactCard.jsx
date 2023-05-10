import React from 'react'
import '../styles/ContactCard.css'
import linkedIn from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'

const ContactCard = () => {

    return (
        <div id='contact-container'>
            <div>
                <a href='https://www.linkedin.com/in/mellarafael/' target='_blank'>
                    <img className='contact-img' src={linkedIn} alt='LinkedIn' />
                </a>
            </div>
            <div>
                <a href='https://github.com/Kike0013' target='_blank'>
                    <img className='contact-img' src={github} alt='Github' />
                </a>
            </div>
        </div>
    )
}

export default ContactCard