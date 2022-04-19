import React from 'react'

import MenuNav from '../../molecules/menu-nav/menu-nav'

import ROUTES from '../../../constants/js/routes'

import { ReactComponent as MenuBarIcon } from '../../../assets/icons/bars-solid.svg'
import { ReactComponent as LolIcon } from '../../../assets/icons/lol-icon.svg'

import './header.scss'

const Header = () => {
    const menuOptions = [
        {
            text: ROUTES.POSTS_NAV,
            href: ROUTES.POSTS_PATH
        },
        {
            text: ROUTES.RANKED_NAV,
            href: ROUTES.RANKED_PATH
        },
        {
            text: ROUTES.CHAMPIONS_NAV,
            href: ROUTES.CHAMPIONS_PATH
        }
    ]

    return (
        <header className="main-header">
            <div className="main-header__logo-title">
                <LolIcon className="main-header__logo" />
                <h1 className="main-header__title">LEAGUE OF STATS</h1>
            </div>
            <MenuNav menuOptions={menuOptions} />
            <MenuBarIcon className="main-header__menu-bar" />
        </header>
    )
}

export default Header
