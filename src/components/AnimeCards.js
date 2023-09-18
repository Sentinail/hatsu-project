import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/themeContext";
import { GridCardContainer } from '../styled-components/GridCardContainer';
import { useNavigate } from "react-router-dom";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/authContext";
import { addDocument } from "../utilities/firestoreDB";
import { toast } from 'react-toastify'
const loadingMiku = require("../assets/icons/loading.gif") 

const AnimeCards = ({ id, image, title, episodeNumber }) => {
    const [ isBookmarked, setIsBookmarked ] = useState(false)

    const { user } = useAuth()

    const { secondaryColor, tertiaryColor } = useContext(themeContext);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const navigate = useNavigate();

    let truncatedTitle = title || '';
    if (truncatedTitle.length > 30) {
        truncatedTitle = truncatedTitle.slice(0, 30) + '...';
    }

    const handleNavigate = () => {
        navigate(`/watch/${id}`);
    }

    const handleBookmark = () => {
        const bookmarks = JSON.parse(localStorage.getItem("user_bookmarks"))
        let alreadyBookmarked = false

        if (bookmarks) {
            for (let i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].anime_id === id) {
                    alreadyBookmarked = true
                }
            }
        }

        if (!alreadyBookmarked) {
            addDocument("user_bookmarks", {
                anime_id: id,
                anime_title: title,
                uid: user.uid
            })
    
            
            bookmarks.push({
                anime_id: id,
                anime_title: title,
                uid: user.uid
            })
            localStorage.setItem("user_bookmarks", JSON.stringify(bookmarks))
    
            setIsBookmarked(true)
            toast(`Bookmark Added : ${title}`)
        } else {
            toast.error("Already Bookmarked!")
            setIsBookmarked(true)
        }
    }

    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem("user_bookmarks"))

        if (bookmarks) {
            for (let i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].anime_id === id) {
                    setIsBookmarked(true)
                }
            }
        }
        
    }, [])

    return (
        <GridCardContainer $tertiaryColor={tertiaryColor} $secondaryColor={secondaryColor}>
            <div className='image'>
                {image && (
                    <>
                        { !isImageLoaded && <div className="anime_cards_loading_container"><img className="loading" src={loadingMiku} alt="Loading..."></img></div>}
                        <img
                            src={image}
                            alt={id}
                            onLoad={() => setIsImageLoaded(true)}
                            style={{ display: isImageLoaded ? 'inline' : 'none' }}
                        />
                        <div className="curtain">
                            <BlueButton 
                                className='button' 
                                onClick={handleNavigate}>
                                    Visit Anime 
                            </BlueButton>

                            <BlueButton
                                isDisabled={ user && !isBookmarked ? false : true}
                                onClick={handleBookmark}
                                className='button'> 
                                    Add To Bookmark 
                            </BlueButton>
                        </div>
                        {episodeNumber && <p className='episode'>Episode: {episodeNumber} </p>}
                    </>
                )}
            </div>
            <p className='title'>
                {truncatedTitle}
            </p>
        </GridCardContainer>
    );
}

export default AnimeCards;
