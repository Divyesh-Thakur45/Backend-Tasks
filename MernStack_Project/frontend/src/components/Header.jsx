import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allContext } from '../pages/Allcontext'

const Header = () => {
    const navigate = useNavigate()
    const { success, setSuccess } = useContext(allContext)
    console.log(success)
    const handleRemove = () => {
        alert("logout successfully")
        localStorage.removeItem("token")
        navigate("/signin")
        setSuccess(false)
    }
    return (
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold text-blue-600">
                <Link to="/">Logo</Link>
            </div>
            <nav className="flex gap-4 text-gray-700 font-medium">
                {!success && (
                    <>
                        <Link to="/signin" className="hover:text-blue-500 transition">Sign In</Link>
                        <Link to="/signup" className="hover:text-blue-500 transition">Sign Up</Link>
                    </>
                )}
                {success && (
                    <>
                        <Link to="/contact" className="hover:text-blue-500 transition">Contact List</Link>
                        <Link to="/create" className="hover:text-blue-500 transition">Create List</Link>
                        <div className="hover:text-blue-500 transition" onClick={handleRemove}>Logout</div>
                    </>
                )}

            </nav>
        </header>
    )
}

export default Header