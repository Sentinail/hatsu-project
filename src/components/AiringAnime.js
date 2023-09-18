import React, { useEffect, useState } from 'react'
import { AiringAnimeContainer, AnimeAiringCellContainer } from '../styled-components/AiringAnimeContainer'
import { themeContext, useThemeContext } from '../context/themeContext'
import { getAiringAnimeSchedule } from '../utilities/GogoAnime'
import BlueButton from './BlueButton'
import { useNavigate } from 'react-router-dom'
import { useHomeContentCache } from '../context/homeContentCacheContext'
const timestamp = require("unix-timestamp")
const mikuLoading = require("../assets/icons/loading.gif")


const AnimeAiringCell = ({anime, ...props}) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/watch/${anime.id}`);
    }

    const timeStamp = timestamp.toDate(anime.airingAt).toDateString()
    const airedAlready = Date.now() > anime.airingAt * 1000

    return (
        <>
            <AnimeAiringCellContainer {...props} >
                <div className="anime_info">
                    <div className="wrap">
                        <img src={anime.image} alt={anime.title.romaji} />
                        <p> <span>Next Episode : {timeStamp}</span> </p>
                    </div>
                    <p className='title'> {anime.title.romaji}</p>    
                </div>
                <div className="airing_info">
                    <BlueButton onClick={handleNavigate} className='episode_button'> Episode: {anime.episode} </BlueButton>
                    {airedAlready && <p> Already Aired </p>}
                </div>
            </AnimeAiringCellContainer>
        </>
    )

}

const AiringAnime = () => {
    const { tertiaryColor } = useThemeContext(themeContext)
    const { airingScheduleCache: fetchResult, setAiringScheduleCache: setFetchResult } = useHomeContentCache()
    const [ isLoaded, setIsLoaded ] = useState(false)
    
    useEffect(() => {
        const getAiringSchedules = async () => {
            const airingSchedules = await getAiringAnimeSchedule()
            setFetchResult(airingSchedules)
            setIsLoaded(true)
        }

        if (!fetchResult) {
            getAiringSchedules()
        } else {
            setIsLoaded(true)
        }
        
    }, [])

    console.log(fetchResult)

    return (
        <AiringAnimeContainer $tertiaryColor={tertiaryColor}>
            <div className='header'>
                    <h1> Airing Schedule </h1>
            </div>

            { isLoaded ? 
            
            <>
                
                <div className='airing_anime_content'>
                    {fetchResult.results.map((anime, index) => {
                        return <AnimeAiringCell anime={anime} key={index}></AnimeAiringCell>
                    })}
                </div>
            </> 
            :

            <div className="loading_container">
                <img className='loading' src={mikuLoading} alt='Loading...'></img>
            </div>
            }
        </AiringAnimeContainer>
    )
}

export default AiringAnime