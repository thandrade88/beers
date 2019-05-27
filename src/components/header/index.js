import React from 'react'

import Logo from '../../components/logo'
import Menu from '../../components/menu'

import './styles.scss'

const Header = () => {
    return (
        <div id="header">
            <Logo />
            <Menu />
        </div>
    )
}

export default Header;