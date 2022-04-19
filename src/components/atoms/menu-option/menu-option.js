import React from 'react'

import './menu-option.scss'

const MenuOption = props => {

    const { optionText, optionHref } = props

    return (
        <a className='menu-option' href={optionHref}>
            {optionText}
        </a>
    )
}

export default MenuOption
