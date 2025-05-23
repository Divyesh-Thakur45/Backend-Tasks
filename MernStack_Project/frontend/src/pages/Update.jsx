import { Dropzone, FileMosaic } from '@files-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const [files, setFiles] = useState([]);
    const updateFiles = (incommingFiles) => {
        setFiles(incommingFiles);
    };
    const navigate = useNavigate()
    const { id } = useParams()

    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [image, setimage] = useState(null) // if you want to handle file later

    useEffect(() => {
        axios.get(`http://localhost:8080/contact/one/${id}`, {
            withCredentials: true
        })
            .then((res) => {
                const { email, name, number } = res?.data?.data || {}
                setemail(email)
                setname(name)
                setnumber(number)
            })
            .catch((err) => console.log(err))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()
        const obj = {
            email,
            name,
            number
        }

        axios.patch(`http://localhost:8080/contact/update/${id}`, obj, {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data)
                navigate("/contact")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Contact</h2>
                <form className="space-y-4" onSubmit={handleUpdate}>
                    <div>
                        <label className="block mb-1 font-medium">Image</label>
                        {/* <input
                            type="file"
                            name="image"
                            onChange={(e) => setimage(e.target.files[0])}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        /> */}
                        <Dropzone onChange={updateFiles} value={files} maxFiles={1}>
                            {files.map((file) => (
                                <FileMosaic {...file} preview />
                            ))}
                        </Dropzone>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setpassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Number</label>
                        <input
                            type="text"
                            value={number}
                            onChange={(e) => setnumber(e.target.value)}
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Update
