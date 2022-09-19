import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header(props){
    return (
        <>
        <header>
            <ul className='navMenu'>
                <img to className='logo' src={'/img/logo3.png'} />
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Favoritos'>Favoritos</Link>
                </li>
                <li>
                    <Link to='/Albumes'>Álbumes</Link>
                </li>
                <li>
                    <Link to='/Canciones'>Canciones</Link>
                </li>
            </ul>
        </header>
        </>
      )
}

export default Header