import React, { useContext, useState } from 'react'
import { SearchContainer } from '../styled-components/SearchContainer'
import { themeContext } from '../context/themeContext'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Search = () => {
    const { secondaryColor } = useContext(themeContext)


    return (
        <>
            <Helmet>
                <title>Hatsu | Search</title>
                <meta
                    name="description"
                    content="Search thousands of high-quality anime titles on Hatsu - Your Ultimate Anime Streaming Destination. Find your favorite anime series and episodes with ease."
                />
            </Helmet>
            <SearchContainer $secondaryColor={secondaryColor}>
                <SearchBar></SearchBar>
                <section>
                    <Outlet></Outlet>
                </section>
            </SearchContainer>
        </>
    )
}

export default Search