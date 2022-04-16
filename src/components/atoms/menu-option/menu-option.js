import React from 'react'

import './menu-option.scss'

const MenuOption = ({ optionText, optionHref }) => {

    return (
        <a className='menu-option' href={optionHref}>
            {optionText}
        </a>
    )
}

export default MenuOption
