import React from 'react'
import { Routes, Route } from 'react-router'
import NavBar from '../../components/NavBar/NavBar'

import css from './style.module.scss'

import * as UIComponents from '../../../components'
import ComponentPage from '../ComponentPage/ComponentPage'
import NavBarLink from '../../components/NavBarLink/NavBarLink'

console.log(UIComponents)
const Home = () => {
    const componentsList = []

    for (const dependency of Object.values(UIComponents)) {
        componentsList.push({
            name: dependency.name,
            component: UIComponents[dependency.name],
        })
    }

    return (
        <div className={css.home_page}>
            <NavBar>
                <NavBarLink to="/" title="Главная" />
                {componentsList.map(({ name }) => (
                    <NavBarLink key={name} to={name} title={name} />
                ))}
            </NavBar>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                {componentsList.map(({ name, component }) => (
                    <Route
                        key={name}
                        path={name}
                        element={<ComponentPage name={name} component={component} />}
                    />
                ))}
            </Routes>
            <div></div>
        </div>
    )
}

export default Home
