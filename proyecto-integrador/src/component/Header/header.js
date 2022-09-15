import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props){
    return(
        <>
                <nav className="navMenu">
                    <div className="logo">
                        <img src="" alt=""/>
                    </div>

                    <div id="menu">
                        <ul>
                            {
                                props.links.map((link, idx) => <li key={`${Date.now()}-${idx}`}>{link}</li>)
                            }
                        </ul>
                    </div>
                </nav>
    </>
    )
}

export default Header