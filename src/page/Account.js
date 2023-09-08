import React, { useContext } from 'react'
import { useAuth } from '../context/authContext'
import { AccountContainer } from '../styled-components/AccountContainer'
import { themeContext } from '../context/themeContext'
import { getUserBookmarks } from '../utilities/firestoreDB'

const Account = () => {
    const { user, logout } = useAuth()
    const { secondaryColor } = useContext(themeContext)
    console.log(user, "Account Info")

    const handleQuery = async () => {
        const bookmarks = await getUserBookmarks("user_bookmarks", user.uid)
        console.log(bookmarks)
    }

    const handleLogout = () => {
        logout()
        localStorage.setItem("user_bookmarks", "{}")
    }

    return (
        <AccountContainer $secondaryColor={secondaryColor}>
            { user &&  <h1> {user.email} </h1>}
            <button onClick={handleLogout}> Logout user </button>
            <button onClick={handleQuery}> Query </button>
        </AccountContainer>
    )
}

export default Account