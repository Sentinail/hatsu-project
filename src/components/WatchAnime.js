import React, { useState, useEffect, useContext } from 'react'
import { WatchAnimeContainer } from '../styled-components/WatchAnimeContainer'
import { themeContext } from '../context/themeContext'
import { Outlet, useParams } from 'react-router-dom'
import { getAnimeInfo } from '../utilities/GogoAnime'
import { Swiper, SwiperSlide } from 'swiper/react'
import EpisodeCard from './EpisodeCard'
import { Navigation } from 'swiper/modules'
const loadingMiku = require("../assets/icons/loading.gif")

const WatchAnime = () => {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
    const [ animeInfo, setAnimeInfo ] = useState()
    const [ loaded, setLoaded ] = useState(false)
    const { anime } = useParams();
    console.log(anime)

    useEffect(() => {
        setLoaded(false)
        
        const getInfoAnime = async () => {
            try {
                const result = await getAnimeInfo(anime)
                setAnimeInfo(result)
                setLoaded(true)
            } catch (err) {
                console.log(err)
            }
        }

        getInfoAnime()
    }, [])

    return (
        <WatchAnimeContainer $tertiaryColor={tertiaryColor}>
            <>
            { loaded ?
            
                <div className="anime_info">
                  <div className="anime_watch">
                    <Outlet></Outlet>
                  </div>
                  <div className="anime_episodes">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        loop={false}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                          // When window width is >= 320px
                          1: {
                            slidesPerView: 1,
                          },
                          490: {
                            slidesPerView: 2,
                          },
                          // When window width is >= 480px
                          745: {
                            slidesPerView: 3,
                          },
                          // When window width is >= 640px
                          1000: {
                            slidesPerView: 4,
                          },
                          // When window width is >= 768px
                        }}
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
                </div>

                :

                <div className='loading_container'>
                    <img className='loading' src={loadingMiku} alt='Loading...'/>
                </div>
            }
        </>
        </WatchAnimeContainer>
    )
}

export default WatchAnime