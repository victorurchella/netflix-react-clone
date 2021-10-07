import React from 'react'
import './index.css'

const Header = ({state}) => {
    return(
        <header className={state ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logoNetflix"></img>
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logoUser"></img>
                </a>
            </div>
        </header>
    )
}

export default Header