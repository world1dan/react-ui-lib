import React from 'react'
import { Link } from 'react-router-dom'

import css from './style.module.scss'

export interface NavBarLinkProps {
    to: string
    title: string
}

const NavBarLink = ({ to, title }: NavBarLinkProps) => {
    return (
        <Link className={css.nav_bar_link} to={to}>
            {title}
        </Link>
    )
}

export default NavBarLink
