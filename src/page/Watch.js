import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { WatchContainer } from '../styled-components/WatchContainer'
import { themeContext } from '../context/themeContext'
import { Helmet } from 'react-helmet'

const Watch = () => {
    const { secondaryColor } = useContext(themeContext)

    return (
        <>
        <Helmet>
            <title>Hatsu | Watch</title>
        </Helmet>
        <WatchContainer $secondaryColor={secondaryColor}>
                <main>
                    <Outlet></Outlet>
                </main>
        </WatchContainer>
        </>
    )
}

export default Watch