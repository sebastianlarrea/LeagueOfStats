import React from 'react'
import MenuOption from '../../atoms/menu-option/menu-option'
import './menu-nav.scss'

const MenuNav = ({menuOptions}) => {

    return (
        <nav className="menu-nav">
            {menuOptions.map((menuOption, index) => {
                return <MenuOption key={index } optionText={menuOption.text} optionHref={menuOption.href} />
            })}
        </nav>
    )
}

export default MenuNav
