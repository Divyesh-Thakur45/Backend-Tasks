import { Dropzone, FileMosaic } from '@files-ui/react';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { allContext } from './Allcontext';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate()
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const { setId } = useContext(allContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("email", email);
        formData.append("name", name);
        formData.append("number", number);

        axios.post("http://localhost:8080/contact/create", formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => (
                console.log(res.data),
                setId(res.data?.data?.userId),
                navigate("/contact")
            ))
            .catch((err) => console.log(err));
    };

    const updateFiles = (incomingFiles) => {
        setFiles(incomingFiles);
        if (incomingFiles.length > 0) {
            setImage(incomingFiles[0].file); // Set raw File object
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Contact</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 font-medium">Image</label>
                        <Dropzone onChange={updateFiles} value={files} maxFiles={1}>
                            {files.map((file) => (
                                <FileMosaic key={file.id} {...file} preview />
                            ))}
                        </Dropzone>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Number</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2"
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;