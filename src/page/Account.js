import React, { useContext } from 'react'
import { useAuth } from '../context/authContext'
import { AccountContainer } from '../styled-components/AccountContainer'
import { themeContext } from '../context/themeContext'
import Bookmarks from '../components/Bookmarks'
import BlueButton from '../components/BlueButton'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Account = () => {
    const { logout, user } = useAuth()
    const { secondaryColor } = useContext(themeContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        localStorage.setItem("user_bookmarks", "{}")
    }

    const handlePasswordChange = () => {
        navigate("/password-reset")
    }

    return (
        <>
        <Helmet>
            <title>Hatsu | {user.displayName} </title>
            <meta
                name="description"
                content="A user in Hatsu and a good one"
            />
        </Helmet>
            <AccountContainer $secondaryColor={secondaryColor}>
                <main>
                    <BlueButton className='logout_button' onClick={handlePasswordChange}> Change Password </BlueButton>
                    <BlueButton className='logout_button' onClick={handleLogout}> Logout </BlueButton>
                    <Bookmarks></Bookmarks>
                </main>
            </AccountContainer>
        </>
        
    )
}

export default Account