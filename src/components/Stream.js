import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { useParams } from 'react-router-dom'
import { getAnimeEPStreamLinks } from '../utilities/GogoAnime'

//watch:id
const episodeSource = [
    {
      "url": "https://www018.vipanicdn.net/streamhls/f332628a980d6c6f913d1740d9dd1644/ep.1.1677620708.360.m3u8",
      "isM3U8": true,
      "quality": "360p"
    },
    {
      "url": "https://www018.vipanicdn.net/streamhls/f332628a980d6c6f913d1740d9dd1644/ep.1.1677620708.480.m3u8",
      "isM3U8": true,
      "quality": "480p"
    },
    {
      "url": "https://www018.vipanicdn.net/streamhls/f332628a980d6c6f913d1740d9dd1644/ep.1.1677620708.720.m3u8",
      "isM3U8": true,
      "quality": "720p"
    },
    {
      "url": "https://www018.vipanicdn.net/streamhls/f332628a980d6c6f913d1740d9dd1644/ep.1.1677620708.1080.m3u8",
      "isM3U8": true,
      "quality": "1080p"
    },
    {
      "url": "https://www018.vipanicdn.net/streamhls/f332628a980d6c6f913d1740d9dd1644/ep.1.1677620708.m3u8",
      "isM3U8": true,
      "quality": "default"
    },
    {
      "url": "https://www077.anifastcdn.info/videos/hls/aCI6rZdOuVgeaG7vMrANpw/1693382347/150137/f332628a980d6c6f913d1740d9dd1644/ep.1.1692424787.m3u8",
      "isM3U8": true,
      "quality": "backup"
    }
  ]

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
                <VideoPlayer sources={source}>

                </VideoPlayer>
            }
        </>
    )
}

export default Stream