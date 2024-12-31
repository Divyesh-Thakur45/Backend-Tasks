import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { toast } from 'react-toastify'

const Login = () => {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const HandleClick = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/user/signin', {
            email,
            password
        }, {
            withCredentials: true,
        }).then((res) => (
            localStorage.setItem("userInfo", JSON.stringify(res.data.userData)),
            toast.success("Login successful")
        ))
            .catch((err) => (
                console.log(err),
                toast.error("Create Account First")
            ))
    }
    // toast.success(res.data.message)
    // toast.error("Create Account First")
    return (
        <div>
            <div className="flex flex-col md:flex-row py-14 px-48">
                {/* Left Section */}
                <div className="bg-blue-600 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8">
                    <h1 className="text-3xl font-bold mb-4">Login</h1>
                    <p className="text-lg">Get access to your Orders, Wishlist and Recommendations</p>
                    <img
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" // Replace with your image URL
                        alt="Signup Illustration"
                        className="mt-6"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                    <form className="w-full max-w-sm">
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
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mb-4"
                            onClick={(e) => HandleClick(e)}
                        >
                            CONTINUE
                        </button>
                        <button
                            type="button"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded mb-4"
                        >
                            Requvest OTP
                        </button>
                        <button
                            type="button"
                            className="w-full border border-gray-300 text-gray-700 font-bold py-2 rounded hover:bg-gray-100"
                        >
                            <NavLink to="/Signup">New User? Sign up</NavLink>

                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login