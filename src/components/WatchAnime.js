import React, { useState, useEffect, useContext } from 'react'
import { WatchAnimeContainer } from '../styled-components/WatchAnimeContainer'
import { themeContext } from '../context/themeContext'
import { Outlet, useParams } from 'react-router-dom'
import { getAnimeInfo } from '../utilities/GogoAnime'
import { Swiper, SwiperSlide } from 'swiper/react'
import EpisodeCard from './EpisodeCard'

//info
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

const WatchAnime = () => {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
    const [ animeInfo, setAnimeInfo ] = useState()
    const { anime } = useParams();
    console.log(anime)

    useEffect(() => {
        
        const getInfoAnime = async () => {
            try {
                const result = await getAnimeInfo(anime)
                setAnimeInfo(result)
            } catch (err) {
                console.log(err)
            }
        }

        getInfoAnime()
    }, [])

    return (
        <WatchAnimeContainer $tertiaryColor={tertiaryColor}>
            { animeInfo && 
            <>
                <div className="anime_info">
                  <div className="info_card">
                      <img src={animeInfo.image} alt={animeInfo.title} />
                      <div className="anime_information">
                          <div className='descriptions'>
                              <h1> {animeInfo.title} </h1>
                              <p> {animeInfo.description} </p>
                          </div>
                          
                          <div className="categories">
                              <p>Other Name: {animeInfo.otherName} </p>
                              <p>Status: {animeInfo.status}</p>
                              <p>Release Date: {animeInfo.releaseDate} </p>
                              <p>Type: {animeInfo.type}</p>
                              <p>Total Episodes: {animeInfo.totalEpisodes} </p>
                              <p>Sub || Dub: {animeInfo.subOrDub} </p>
                              <p>Genres: {animeInfo.genres.join(" | ")} </p>
                          </div>
                      </div>
                  </div>
                  <div className="anime_watch">
                    <Outlet></Outlet>
                  </div>
                  <div className="anime_episodes">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={false}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        {
                            animeInfo.episodes.map((episode, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <EpisodeCard id={episode.id} image={animeInfo.image} title={animeInfo.title} episodeNumber={episode.number}></EpisodeCard>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                  </div>
                </div>
            </> 
            }
        </WatchAnimeContainer>
    )
}

export default WatchAnime