import React, { useEffect, useState} from 'react'
import { TopAnimeSectionContainer } from '../styled-components/TopAnimeSectionContainer'
import AnimeCards from '../components/AnimeCards'
import { getRecentEpisodes, getTopAiringAnime } from '../utilities/GogoAnime'
const mikuLoading = require("../assets/icons/loading.gif")

const PopularAnimeSections = () => {
    const [ animeList, setAnimeList ] = useState()
    const [ recentAnimeList, setRecentAnimeList] = useState()

    useEffect(() => {
          const getTheRecentEpisodes = async () => {
            try {
              const result = await getRecentEpisodes()
              console.log(result.results, 'recentEp')
            //   setRecentAnimeList(result.results)
            } catch (err) {
              console.log(err)
            }
            
          }

          const getTopAnimeList = async () => {

            try {
              const result = await getTopAiringAnime()
              console.log(result.results, 'top Airing')
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
                                <AnimeCards episodeNumber={null} key={index} id={anime.id} image={anime.image} title={anime.title.userPreferred}></AnimeCards>
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

export default PopularAnimeSections