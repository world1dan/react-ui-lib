import React from 'react'

import css from './style.module.scss'

export interface NavBarProps {
    children: React.ReactNode
}

const NavBar = ({ children }: NavBarProps) => {
    return <div className={css.nav_bar}>{children}</div>
}

export default NavBar
