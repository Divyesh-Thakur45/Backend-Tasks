import React from 'react'

const Private = ({ children }) => {
    let isValide = JSON.parse(localStorage.getItem("token"))
    if (!isValide) {
        console.log("Sorry you can not access this page")
    } else {
        return children;
    }

    return (
        <div>Without Login you can not access this page</div>
    )
}

export default Private