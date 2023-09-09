import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const NegatedPrivateRoute = ({ children, redirectPath="/home" }) => {
    const { user } = useAuth()

    if (user) {
        return <Navigate to={redirectPath}></Navigate>
    }

    return children
}

export default NegatedPrivateRoute