import React, { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { GridCardContainer } from '../styled-components/GridCardContainer'
import { useNavigate } from "react-router-dom";

const AnimeCards = ({ id, image, title, episodeNumber }) => {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
    const navigate = useNavigate()
    console.log(id)

    let truncatedTitle = title || '';
    if (truncatedTitle.length > 30) {
        truncatedTitle = truncatedTitle.slice(0, 30) + '...';
    }

    const handleNavigate = () => {
        navigate(`/watch/${id}`)
    }


    return (
        <>
            <GridCardContainer $tertiaryColor={tertiaryColor} $secondaryColor={secondaryColor}>
                <div className='image'>
                    <img src={image} alt={id} />
                    <div className="curtain">
                        <button className='button' onClick={handleNavigate}> Visit Anime </button>
                        <button className='button'> Add To Bookmark </button>
                    </div>
                    { episodeNumber && <p className='episode'>Episode: {episodeNumber} </p> }
                </div>
                <p className='title'>
                    {truncatedTitle}
                </p>
            </GridCardContainer>
        </>
    )
}

export default AnimeCards