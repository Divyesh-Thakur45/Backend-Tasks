import React from 'react'
import Home from './pages/Home'
import { Notes } from './pages/Notes'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router'
import CreateNotes from './pages/CreateNotes'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Notes" element={<Notes />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/CreateNotes" element={<CreateNotes />} />
            </Routes>
        </div>
    )
}

export default AllRoutes