import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold text-blue-600">
                <Link to="/">Logo</Link>
            </div>
            <nav className="flex gap-4 text-gray-700 font-medium">
                <Link to="/signin" className="hover:text-blue-500 transition">Sign In</Link>
                <Link to="/signup" className="hover:text-blue-500 transition">Sign Up</Link>
                <Link to="/contact" className="hover:text-blue-500 transition">Contact List</Link>
                <Link to="/create" className="hover:text-blue-500 transition">Create List</Link>
            </nav>
        </header>
    )
}

export default Header