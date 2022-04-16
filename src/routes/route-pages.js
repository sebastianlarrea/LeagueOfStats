import React from 'react'
import Ranked from '../pages/ranked'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const RoutePages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Ranked />} />
            </Routes>
        </Router>
    )
}

export default RoutePages
