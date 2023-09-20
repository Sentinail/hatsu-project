import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { WatchContainer } from '../styled-components/WatchContainer'
import { themeContext } from '../context/themeContext'

const Watch = () => {
    const { secondaryColor } = useContext(themeContext)

    return (
        <>
        <WatchContainer $secondaryColor={secondaryColor}>
                <main>
                    <Outlet></Outlet>
                </main>
        </WatchContainer>
        </>
    )
}

export default Watch