import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const [data, setdata] = useState([])
    const update = useNavigate()
    console.log(data)
    const showData = () => {
        axios.get("http://localhost:8080/contact/all/683021ed425fbc47e1e976e2")
            .then((res) => setdata(res.data.data))
            .catch((err) => console.log(err))
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/contact/delete/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
    const handleUpdate = (id) => {
        update(`/update/${id}`)
    }
    useEffect(() => {
        showData()
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {data.map((user, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 p-6 hover:shadow-xl transition duration-300">
                        <img
                            src={`http://localhost:8080/${user.image}`}
                            alt={user.name}
                            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-500"
                        />
                        <div className="text-center mt-4">
                            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
                            <p className="text-sm text-gray-600 mt-1">{user.email}</p>
                            <p className="text-xs text-gray-400 mt-1">User ID: {user.userId}</p>
                            {user.number && (
                                <p className="text-xs text-gray-400 mt-1">Number: {user.number}</p>
                            )}
                        </div>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition" onClick={() => handleDelete(user._id)}>
                                Delete
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition" onClick={() => handleUpdate(user._id)}>
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Contact