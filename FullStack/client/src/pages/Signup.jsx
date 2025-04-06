import React, { useState } from 'react'
import { NavLink } from 'react-router'
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [name, setname] = useState(null)
    const handleSubmite = (e) => {
        e.preventDefault()
        console.log(email, password, name)
        axios.post("http://localhost:8080/user/signup", {
            name,
            email,
            password
        }).then((res) => toast.success(res.data))
            // toast("Wow user created successfully !")
            .catch((err) => toast.error(err.message))
        // toast("Oops! User already exists. Please login.")
    }
    return (
        <div className=''>
            <div className="flex flex-col md:flex-row py-14 px-48">
                {/* Left Section */}
                <div className="bg-blue-600 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-3xl font-bold mb-4">Looks like you're new here!</h1>
                    <p className="text-lg">Sign up with your Email to get started</p>
                    <img
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" // Replace with your image URL
                        alt="Signup Illustration"
                        className="mt-6"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                    <form className="w-full max-w-sm">
                        <div>
                            <label
                                htmlFor="Name"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                onChange={(e) => setname(e.target.value)}
                                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="Email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                onChange={(e) => setemail(e.target.value)}
                                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                onChange={(e) => setpassword(e.target.value)}
                                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            By continuing, you agree to Flipkart's{" "}
                            <a href="#" className="text-blue-500 underline">
                                Terms of Use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-500 underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                        <button
                            type="button"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded mb-4"
                            onClick={(e) => handleSubmite(e)}
                        >
                            CONTINUE
                        </button>
                        <button
                            type="button"
                            className="w-full border border-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-100"
                        >
                            <NavLink to="/Login">Existing User? Log in</NavLink>

                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup