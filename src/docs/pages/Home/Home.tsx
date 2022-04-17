import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import css from './style.module.scss'

const Home = () => {
    return (
        <div className={css.home_page}>
            <NavBar />
            <div></div>
        </div>
    )
}

export default Home
