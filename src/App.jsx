import React from 'react'
import LandingPage from './Pages/LandingPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    )
}

export default App
