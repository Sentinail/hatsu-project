import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeEPStreamLinks } from '../utilities/GogoAnime'
import VideoPlayer2 from './VideoPlayer2'
import { StreamContainer } from '../styled-components/StreamContainer'
const loadingMiku = require("../assets/icons/loading.gif")

const Stream = () => {
    const [ source, setSources ] = useState()
    const [ isLoaded, setIsLoaded ] = useState(false)
    const { episode } = useParams()

    useEffect(() => {
        setIsLoaded(false)
        const getEpisodes = async () => {
            const result = await getAnimeEPStreamLinks(episode)
            setSources(result.sources)
            setIsLoaded(true)
        }

        getEpisodes()
    },[episode])

    return (
        <>
            <StreamContainer>
                { isLoaded ?
                    <VideoPlayer2 sources={source}>

                    </VideoPlayer2>

                :

                    <div className="loading_container">
                        <img className='loading' src={loadingMiku} alt="Loading..." />
                    </div>
                }
            </StreamContainer>
        </>
    )
}

export default Stream