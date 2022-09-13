import React from 'react'
import './header.css'

function Header(props){
    return(
        <React.Fragment>
            <header className="mainHeader">
                <nav className="navMenu">
                    <div className="logo">
                        <img src="" alt=""/>

                    </div>

                    <div id="menu">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Favoritos</a>
                            </li>
                            <li>
                                <a href="">Canciones</a> 
                            </li>
                            
                        </ul>
                    </div>
                </nav>
        </header>
    </React.Fragment>
    )
}

export default Header