import { HomeCarouselCardContainer } from '../styled-components/HomeCarouselCardContainer';
import { getAnimeInfo } from '../utilities/GogoAnime';
import React, { useState, useEffect, useContext } from 'react';
import { themeContext } from '../context/themeContext';
import { useNavigate } from "react-router-dom";

const HomeCarouselCard = ({ id, title, image }) => {
    const [animeInfo, setAnimeInfo] = useState({});
    const { primaryColor, tertiaryColor } = useContext(themeContext);
    const navigate = useNavigate()

    useEffect(() => {
        const getRelevantInfo = async () => {
            const { genres, description } = await getAnimeInfo(id);
            return {
                genres,
                description
            };
        };

        getRelevantInfo()
            .then(res => {
                setAnimeInfo(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let truncatedDescription = animeInfo.description || '';

    let truncatedTitle = title || '';

    if (truncatedDescription.length > 200) {
        truncatedDescription = truncatedDescription.slice(0, 200) + '...';
    }

    if (truncatedTitle.length > 50) {
        truncatedTitle = truncatedTitle.slice(0, 50) + '...';
    }

    const genreList = animeInfo.genres && animeInfo.genres.length > 0
        ? animeInfo.genres.join(" | ")
        : '';

    const handleNavigate = () => {
        navigate(`/watch/${id}`)
    }
    return (
        <HomeCarouselCardContainer $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
            {Object.keys(animeInfo).length > 0 && (
                <div className="container">
                    <img src={image} className="anime_banner" alt="anime_banner" />
                    <div className="info">
                        <h1> {truncatedTitle} </h1>
                        <p> {genreList} </p>
                        <p> {truncatedDescription} </p>
                        <button className='watch_now_button' onClick={(handleNavigate)}> Watch Now </button>
                    </div>
                </div>
            )}
        </HomeCarouselCardContainer>
    );
};

export default HomeCarouselCard;
