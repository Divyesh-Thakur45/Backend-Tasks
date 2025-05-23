import { Dropzone, FileMosaic } from '@files-ui/react'
import React from 'react'
import { useState } from 'react';

const Create = () => {
    const [files, setFiles] = useState([]);
    const updateFiles = (incommingFiles) => {
        setFiles(incommingFiles);
    };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Contact</h2>
                    <form className="space-y-4">
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
                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">name</label>
                            <input
                                type="text"

                                className="w-full border border-gray-300 rounded px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Number</label>
                            <input
                                type="text"

                                className="w-full border border-gray-300 rounded px-4 py-2"
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
        </div>
    )
}

export default Create