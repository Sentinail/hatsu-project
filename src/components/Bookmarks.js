import React, { useContext, useEffect, useState } from 'react'
import { BookmarksContainer } from '../styled-components/BookmarksContainer'
import { useAuth } from '../context/authContext'
import BlueButton from './BlueButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { themeContext } from '../context/themeContext'
import { useNavigate } from 'react-router-dom'
import { removeUserBookmark } from '../utilities/firestoreDB'
import { toast } from 'react-toastify'
import { auth } from '../firebase-config/firebaseConfig'
const hatsuSticker = require("../assets/icons/hatsu_sticker.png")

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

        console.log(user)
    }, [user])

    const handleBookmark = (id) => {
        navigate(`/watch/${id}`)
    }

    const handleDeleteBookmark = (id, anime_title) => {
        removeUserBookmark("user_bookmarks", id, user.uid)

        const userBookmarks = JSON.parse(localStorage.getItem("user_bookmarks"))
        const newUserBookmarks = userBookmarks.filter(bookmark => {
            return bookmark.anime_id !== id
        })

        localStorage.setItem("user_bookmarks", JSON.stringify(newUserBookmarks))
        setBookmarks(newUserBookmarks)

        toast(`Removed Bookmark : ${anime_title}`)
    }

    return (
        <BookmarksContainer $tertiaryColor={tertiaryColor}>
            <h1> Welcome {user && user.displayName} !</h1>
            <h1><span> Bookmarks : </span></h1>
            <img className='sticker' src={hatsuSticker} alt="hatsu_sticker" />
            {
                bookmarks &&
                bookmarks.map((bookmark, index) => {
                    return (
                        <div key={index} className="bookmark_cell_container">
                            <BlueButton key={index + 10} onClick={() => {handleBookmark(bookmark.anime_id)}} className='bookmark_cell' > { bookmark.anime_title } </BlueButton>
                            <BlueButton key={index + 100} onClick={() => {handleDeleteBookmark(bookmark.anime_id, bookmark.anime_title)}} className='remove'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></BlueButton>
                        </div>
                    )
                    
                })
            }

        </BookmarksContainer>
    )
}

export default Bookmarks