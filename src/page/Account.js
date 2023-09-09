import React, { useContext } from 'react'
import { useAuth } from '../context/authContext'
import { AccountContainer } from '../styled-components/AccountContainer'
import { themeContext } from '../context/themeContext'
import Bookmarks from '../components/Bookmarks'
import BlueButton from '../components/BlueButton'
import { toast } from 'react-toastify'

const Account = () => {
    const { logout } = useAuth()
    const { secondaryColor } = useContext(themeContext)

    const handleLogout = () => {
        logout()
        localStorage.setItem("user_bookmarks", "{}")
    }

    return (
        <AccountContainer $secondaryColor={secondaryColor}>
            <main>
                <BlueButton className='logout_button' onClick={handleLogout}> Logout </BlueButton>
                <Bookmarks></Bookmarks>
            </main>
        </AccountContainer>
    )
}

export default Account