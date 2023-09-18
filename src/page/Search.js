import React, { useContext, useState } from 'react'
import { SearchContainer } from '../styled-components/SearchContainer'
import { themeContext } from '../context/themeContext'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'

const Search = () => {
    const { secondaryColor } = useContext(themeContext)


    return (
        <SearchContainer $secondaryColor={secondaryColor}>
            <SearchBar></SearchBar>
            <section>
                <Outlet></Outlet>
            </section>
        </SearchContainer>
    )
}

export default Search