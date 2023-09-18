import { HomeCarouselCardContainer } from '../styled-components/HomeCarouselCardContainer';
import { getAnimeInfo } from '../utilities/GogoAnime';
import React, { useState, useEffect, useContext } from 'react';
import { themeContext } from '../context/themeContext';
import { useNavigate } from "react-router-dom";
import { useHomeContentCache } from '../context/homeContentCacheContext';
const mikuLoading = require("../assets/icons/loading.gif")

const HomeCarouselCard = ({ id, title, image }) => {
    const { homeCarouselCardsCache, setHomeCarouselCardsCache} = useHomeContentCache()
    const [ fetchResult, setFetchResult ] = useState()
    const { primaryColor, tertiaryColor } = useContext(themeContext);
    const [ isLoaded, setIsLoaded ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAnimeInfo = async () => {
            try {
                const result = await getAnimeInfo(id)
                const newCache = homeCarouselCardsCache
                newCache.push(result)
                setHomeCarouselCardsCache(newCache)
                setFetchResult(result)
                setIsLoaded(true)
            } catch (err) {
                console.log(err)
            }
        }

        const result = homeCarouselCardsCache.find((animeInfo) => {
            return animeInfo.id === id
        })

        if (!result) {
            fetchAnimeInfo()
        } else {
            setFetchResult(result)
            setIsLoaded(true)
        }

        
    }, []);

    let truncatedDescription = fetchResult?.description || '';

    let truncatedTitle = title || '';

    if (truncatedDescription.length > 200) {
        truncatedDescription = truncatedDescription.slice(0, 200) + '...';
    }

    if (truncatedTitle.length > 50) {
        truncatedTitle = truncatedTitle.slice(0, 50) + '...';
    }

    const genreList = fetchResult?.genres && fetchResult?.genres.length > 0
        ? fetchResult.genres.join(" | ")
        : '';

    const handleNavigate = () => {
        navigate(`/watch/${id}`)
    }

    return (
        <HomeCarouselCardContainer $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
            {isLoaded ? 
                <>
                    <div className="container">
                        <img src={image} className="anime_banner" alt="anime_banner" />
                        <div className="info">
                            <h1> {truncatedTitle} </h1>
                            <p> {genreList} </p>
                            <p> {truncatedDescription} </p>
                            <button className='watch_now_button' onClick={(handleNavigate)}> Watch Now </button>
                        </div>
                    </div>
                </>

                :
                
                <img className='loading' src={mikuLoading} alt='Loading...'></img>
            }
        </HomeCarouselCardContainer>
    );
};

export default HomeCarouselCard;
