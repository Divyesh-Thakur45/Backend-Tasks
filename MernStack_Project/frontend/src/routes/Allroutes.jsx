import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Update from '../pages/Update'
import Create from '../pages/Create'
import Private from '../pages/Private'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/contact' element={
                    <Private>
                        <Contact />
                    </Private>
                } />
                <Route path='/create' element={<Create />} />
                <Route path='/update/:id' element={<Update />} />
            </Routes>
        </div>
    )
}

export default Allroutes