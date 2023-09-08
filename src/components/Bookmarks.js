import React, { useContext, useEffect, useState } from 'react'
import { BookmarksContainer } from '../styled-components/BookmarksContainer'
import { useAuth } from '../context/authContext'
import BlueButton from './BlueButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { themeContext } from '../context/themeContext'
import { useNavigate } from 'react-router-dom'

const Bookmarks = () => {
    const { user } = useAuth()
    const [ bookmarks, setBookmarks ] = useState()
    const { tertiaryColor } = useContext(themeContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (user) {
            const parsedBookmarks = JSON.parse(localStorage.getItem("user_bookmarks"))
            setBookmarks(parsedBookmarks)
        }
    }, [])

    const handleBookmark = (id) => {
        navigate(`/watch/${id}`)
    }

    const handleDeleteBookmark = (id) => {
        console.log(`Delete ${id}`)
    }

    return (
        <BookmarksContainer $tertiaryColor={tertiaryColor}>
            <h1><span> Bookmarks : </span></h1>
            {
                bookmarks &&
                bookmarks.map((bookmark, index) => {
                    return (
                        <div className="bookmark_cell_container">
                            <BlueButton onClick={() => {handleBookmark(bookmark.anime_id)}} className='bookmark_cell' > { bookmark.anime_title } </BlueButton>
                            <BlueButton onClick={() => {handleDeleteBookmark(bookmark.anime_id)}} className='remove'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></BlueButton>
                        </div>
                    )
                    
                })
            }

        </BookmarksContainer>
    )
}

export default Bookmarks