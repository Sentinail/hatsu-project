import React, { useContext } from 'react'
import { useAuth } from '../context/authContext'
import { AccountContainer } from '../styled-components/AccountContainer'
import { themeContext } from '../context/themeContext'
import { getUserBookmarks } from '../utilities/firestoreDB'
import Bookmarks from '../components/Bookmarks'

const Account = () => {
    const { user, logout } = useAuth()
    const { secondaryColor } = useContext(themeContext)

    const handleLogout = () => {
        logout()
        localStorage.setItem("user_bookmarks", "{}")
    }

    return (
        <AccountContainer $secondaryColor={secondaryColor}>
            <Bookmarks></Bookmarks>
            <button onClick={handleLogout}> Logout user </button>
        </AccountContainer>
    )
}

export default Account