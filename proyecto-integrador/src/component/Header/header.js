import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header(props){
    return (
        <header>
            <ul className='navMenu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Favoritos'>Favoritos</Link>
                </li>
                <li>
                    <Link to='/Canciones'>Ver más</Link>
                </li>
            </ul>
        </header>
      )
}

export default Header