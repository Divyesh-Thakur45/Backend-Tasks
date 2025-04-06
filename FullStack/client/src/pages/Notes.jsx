import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Notes = () => {
    const [showNotes, setshowNotes] = useState([])
    const [deleteNotes, setdeleteNotes] = useState(null)
    const userData = JSON.parse(localStorage.getItem('userInfo'))

    // delete notes
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/notes/delete/${id}`).then((res) => setdeleteNotes(res))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        axios.get(`http://localhost:8080/notes/getNotes/${userData?._id}`, {
            withCredentials: true,
        }).then((res) => setshowNotes(res.data.notes))
            .catch((err) => console.log(err))
    }, [deleteNotes])

    return (
        <div>
            <div className="grid grid-cols-3 gap-6 m-5">
                {showNotes.map(({ Image, description, title, _id, userId }) => (
                    <div
                        key={_id}
                        className="bg-gray-100 shadow-md rounded-lg p-4 text-center hover:shadow-xl"
                    >
                        <img
                            src={Image} alt={title}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                        <p className="text-sm text-gray-500">{description}</p>
                        <p className="text-sm text-gray-500">{userId}</p>
                        <div className='flex justify-around'>
                            <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600">
                                Update
                            </button>
                            <button className="mt-4 bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600" onClick={() => handleDelete(_id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
