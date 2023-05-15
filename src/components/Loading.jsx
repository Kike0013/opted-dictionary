import React from 'react'
import logo from '../assets/logo.svg'

const Loading = () => {
    return (
        <div style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <img id='logo-img' src={logo} alt='OPTED Dictionary logo' />
            <h3><i>Loading...</i></h3>
        </div>
    )
}

export default Loading