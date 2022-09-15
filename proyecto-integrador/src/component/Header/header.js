import React from 'react'
import './Header.css'

function Header(props){
    return(
        <React.Fragment>
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
    </React.Fragment>
    )
}

export default Header