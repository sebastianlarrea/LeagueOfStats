import React from 'react'
import Ranked from '../pages/ranked'
import Posts from '../pages/posts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const RoutePages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/ranked" element={<Ranked />} />
                <Route path="/post" element={<Posts />} />
                <Route path="*" element={<Posts />} />
            </Routes>
        </Router>
    )
}

export default RoutePages
