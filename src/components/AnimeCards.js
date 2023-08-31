import React, { useContext, useState } from "react";
import { themeContext } from "../context/themeContext";
import { GridCardContainer } from '../styled-components/GridCardContainer';
import { useNavigate } from "react-router-dom";
const loadingMiku = require("../assets/icons/loading.gif") 

const AnimeCards = ({ id, image, title, episodeNumber }) => {
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

    return (
        <GridCardContainer $tertiaryColor={tertiaryColor} $secondaryColor={secondaryColor}>
            <div className='image'>
                {image && (
                    <>
                        { !isImageLoaded && <div className="loading_container"><img className="loading" src={loadingMiku} alt="Loading..."></img></div>}
                        <img
                            src={image}
                            alt={id}
                            onLoad={() => setIsImageLoaded(true)}
                            style={{ display: isImageLoaded ? 'inline' : 'none' }}
                        />
                        <div className="curtain">
                            <button className='button' onClick={handleNavigate}> Visit Anime </button>
                            <button className='button'> Add To Bookmark </button>
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
