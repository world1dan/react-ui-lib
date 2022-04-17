import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'

import '../colors.css'
import './style.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

export default App
