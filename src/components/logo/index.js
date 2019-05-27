import React from 'react'
import { NavLink } from 'react-router-dom'

import LogoImg from './../../img/logo.png'

import './styles.scss'

const Logo = () => {
    return (
        <NavLink className='brand' to="/">
            <img src={LogoImg} alt='Beers' />
        </NavLink>
    )
}

export default Logo;