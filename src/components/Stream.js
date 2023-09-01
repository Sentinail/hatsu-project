import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeEPStreamLinks } from '../utilities/GogoAnime'
import VideoPlayer2 from './VideoPlayer2'

const Stream = () => {
    const [ source, setSources ] = useState()
    const { episode } = useParams()

    useEffect(() => {
        const getEpisodes = async () => {
            const result = await getAnimeEPStreamLinks(episode)
            setSources(result.sources)
        }

        getEpisodes()
    },[episode])

    return (
        <>
            { source && 
                <VideoPlayer2 sources={source}>

                </VideoPlayer2>
            }
        </>
    )
}

export default Stream