import React, { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom'
import WatchAnime from '../components/WatchAnime'
import { WatchContainer } from '../styled-components/WatchContainer'
import { themeContext } from '../context/themeContext'

const result = {
    "id": "gogoanimehd.io",
    "title": "Hataraku Saibou!!",
    "url": "https://gogoanimehd.io/category/hataraku-saibou",
    "genres": [
      "Comedy",
      "Shounen"
    ],
    "totalEpisodes": 8,
    "image": "https://gogocdn.net/cover/hataraku-saibou.png",
    "releaseDate": "2021",
    "description": "Second season of Hataraku Saibou.",
    "subOrDub": "sub",
    "type": "WINTER 2021 ANIME",
    "status": "Completed",
    "otherName": "Cells at Work! 2nd Season, はたらく細胞!!",
    "episodes": [
      {
        "id": "hataraku-saibou-2-episode-1",
        "number": 1,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-1"
      },
      {
        "id": "hataraku-saibou-2-episode-2",
        "number": 2,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-2"
      },
      {
        "id": "hataraku-saibou-2-episode-3",
        "number": 3,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-3"
      },
      {
        "id": "hataraku-saibou-2-episode-4",
        "number": 4,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-4"
      },
      {
        "id": "hataraku-saibou-2-episode-5",
        "number": 5,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-5"
      },
      {
        "id": "hataraku-saibou-2-episode-6",
        "number": 6,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-6"
      },
      {
        "id": "hataraku-saibou-2-episode-7",
        "number": 7,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-7"
      },
      {
        "id": "hataraku-saibou-2-episode-8",
        "number": 8,
        "url": "https://gogoanimehd.io//hataraku-saibou-2-episode-8"
      }
    ]
  }

const Watch = () => {
    const { primaryColor, secondaryColor } = useContext(themeContext)
    console.log("Watch")

    return (
        <>
        <WatchContainer $secondaryColor={secondaryColor}>
                <main>
                    <Outlet></Outlet>
                </main>
        </WatchContainer>
        </>
    )
}

export default Watch