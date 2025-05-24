import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allContext } from './Allcontext'

const Contact = () => {
    const { id } = useContext(allContext)
    const [data, setData] = useState([])
    console.log(data)
    const navigate = useNavigate()
    console.log(data)
    const showData = () => {

        axios.get(`http://localhost:8080/contact/all/${id}`)
            .then((res) => setData(res?.data?.data))
            .catch((err) => console.log(err))

    }

    const handleDelete = (contactId) => {
        axios.delete(`http://localhost:8080/contact/delete/${contactId}`)
            .then((res) => {
                console.log(res.data)
                showData() // ✅ Update list after delete
            })
            .catch((err) => console.log(err))
    }

    const handleUpdate = (contactId) => {
        navigate(`/update/${contactId}`)
    }

    useEffect(() => {
        showData()
    }, [id]) // ✅ wait for id from context

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((user, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 p-6 hover:shadow-xl transition duration-300">
                        <img
                            src={`http://localhost:8080/photos/${user.image}`}
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
                            <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition"
                                onClick={() => handleDelete(user._id)}>
                                Delete
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition"
                                onClick={() => handleUpdate(user._id)}>
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
