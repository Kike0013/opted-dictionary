import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/Home.css'

const Home = () => {
    return (
        <>
            <div id='home-div'>
                <img id='logo-img' src={logo} alt='OPTED Dictionary logo' />
                {/* to do */}
                <h3>Welcome to the OPTED Dictionary App!</h3>
                <p>Use the search box or a letter button</p>
            </div>
        </>
    )
}

export default Home