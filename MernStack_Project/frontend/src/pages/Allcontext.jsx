import { createContext, useState } from "react";

export const allContext = createContext()

const AllContextProvider = ({ children }) => {
    const [success, setSuccess] = useState(false);
    const [token, setToken] = useState('');
    const [id, setId] = useState('');
    return (
        <allContext.Provider value={{ success, setSuccess, token, setToken, id, setId }}>
            {children}
        </allContext.Provider>
    )
}

export default AllContextProvider