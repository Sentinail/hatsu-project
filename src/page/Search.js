import React, { useContext, useState } from 'react'
import { SearchContainer } from '../styled-components/SearchContainer'
import { themeContext } from '../context/themeContext'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import SearchFilter from '../components/SearchFilter'

const filterOptions = [
    [
        {
            value: null, label: "No Filter"
        },
        {
            value: "ANIME", label: "Anime"
        },
        {
            value: "MANGA", label: "Manga"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
        {
            value: "WINTER", label: "Winter"
        },
        {
            value: "SPRING", label: "Spring"
        },
        {
            value: "SUMMER", label: "Summer"
        },
        {
            value: "FALL", label: "Fall"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
        {
            value: "TV", label: "TV"
        },
        {
            value: "TV_SHORT", label: "TV Short"
        },
        {
            value: "OVA", label: "OVA"
        },
        {
            value: "ONA", label: "ONA"
        },
        {
            value: "MOVIE", label: "Movie"
        },
        {
            value: "SPECIAL", label: "Special"
        },
        {
            value: "MUSIC", label: "Music"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
    ],
    [
        {
            value: null, label: "No Filter"
        },
    ],
]

const Search = () => {
    const { secondaryColor, tertiaryColor } = useContext(themeContext)


    return (
        <>
            <Helmet>
                <title>Hatsu | Search</title>
                <meta
                    name="description"
                    content="Search thousands of high-quality anime titles on Hatsu - Your Ultimate Anime Streaming Destination. Find your favorite anime series and episodes with ease."
                />
            </Helmet>
            <SearchContainer $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
                <div className="search_page_search_container">
                    <SearchBar></SearchBar>
                <section className="filters">
                </section>
                </div>
                <section className='results'>
                    <Outlet></Outlet>
                </section>
            </SearchContainer>
        </>
    )
}

export default Search