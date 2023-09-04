import React, { useEffect, useState} from 'react'
import { TopAnimeSectionContainer } from '../styled-components/TopAnimeSectionContainer'
import AnimeCards from './AnimeCards'
import { getRecentEpisodes, getTopAiringAnime } from '../utilities/GogoAnime'
const mikuLoading = require("../assets/icons/loading.gif")

const TopAnimeSection = () => {
    const [ animeList, setAnimeList ] = useState()
    const [ recentAnimeList, setRecentAnimeList] = useState()

    useEffect(() => {
          const getTheRecentEpisodes = async () => {
            try {
              const result = await getRecentEpisodes()
              setRecentAnimeList(result.results)
            } catch (err) {
              console.log(err)
            }
            
          }

          const getTopAnimeList = async () => {

            try {
              const result = await getTopAiringAnime()
              setAnimeList(result.results)
            } catch (err) {
              console.log(err)
            }
            
          }

          getTheRecentEpisodes()
          getTopAnimeList()
    }, [])

    return (
        <TopAnimeSectionContainer>
            <section>
                { animeList ? 
                  <>
                    <h1 className='section_title'>Top Animes</h1>
                    <div className='cards'>
                        { animeList && animeList.map((anime, index) => {
                            return (
                                <AnimeCards episodeNumber={null} key={index} id={anime.id} image={anime.image} title={anime.title}></AnimeCards>
                            )
                        })}
                    </div>
                  </>

                  :

                  <div className="loading_container">
                    <img className='loading' src={mikuLoading} alt='Loading...'></img>
                  </div>
              }
              
            </section>
            <section>
                { recentAnimeList ?
                <>
                  <h1 className='section_title'>Recent Episodes</h1>
                  <div className='cards'>
                      { recentAnimeList && recentAnimeList.map((anime, index) => {
                          return (
                              <AnimeCards episodeNumber={anime.episodeNumber} key={index} id={anime.id} image={anime.image} title={anime.title}></AnimeCards>
                          )
                      })}
                  </div>
                </>

                :

                <div className="loading_container">
                  <img className='loading' src={mikuLoading} alt='Loading...'></img>
                </div>
                }
                
            </section>
        </TopAnimeSectionContainer>
    )
}

export default TopAnimeSection