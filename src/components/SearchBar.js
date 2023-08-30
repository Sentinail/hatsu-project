import React, { useContext, useState } from 'react'
import { SearchBarContainer } from '../styled-components/SearchBarContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { themeContext } from '../context/themeContext'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const { tertiaryColor } = useContext(themeContext)
    const [ search, setSearch ] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
    }

    return (
        <SearchBarContainer $tertiaryColor={tertiaryColor}>
            <form onSubmit={handleSubmit} className="search_bar">
                <input value={search} onChange={handleChange} type="text" name="" id="" placeholder='Search' />
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                </button>
            </form>
        </SearchBarContainer>
    )
}

export default SearchBar