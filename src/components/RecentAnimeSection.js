import React, { useContext, useEffect, useState} from 'react'
import AnimeCards from './AnimeCards'
import { getRecentEpisodes } from '../utilities/GogoAnime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BlueButton from './BlueButton'
import { RecentAnimeSectionContainer } from '../styled-components/RecentAnimeSectionContainer'
import { themeContext } from '../context/themeContext'
import { useHomeContentCache } from '../context/homeContentCacheContext'
const mikuLoading = require("../assets/icons/loading.gif")

const RecentAnimeSection = () => {
    const { secondaryColor, tertiaryColor } = useContext(themeContext)
    const { recentAnimeEPCache: fetchResult, setRecentAnimeEPCache: setFetchResult} = useHomeContentCache()
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
          const getAnimeList = async () => {

            try {
              const result = await getRecentEpisodes()
              setFetchResult(result)
              setIsLoaded(true)
            } catch (err) {
              console.log(err)
              setIsLoaded(true)
            }
            
          }
          
          if (fetchResult === undefined) {
            getAnimeList()
          } else {
            setIsLoaded(true)
          }
    }, [])

    const handleNextPage = async (currentPage) => {
      if (fetchResult.hasNextPage) {
        setIsLoaded(false)
        const result = await getRecentEpisodes(Number(currentPage) + 1)
        setFetchResult(result)
        setIsLoaded(true)
      }
    }

    const handlePrevPage = async (currentPage) => {
      if (fetchResult.currentPage > 1) {
        setIsLoaded(false)
        const result = await getRecentEpisodes(Number(currentPage) - 1)
        setFetchResult(result)
        setIsLoaded(true)
      }
    }

    return (
        <RecentAnimeSectionContainer $tertiaryColor={tertiaryColor} $secondaryColor={secondaryColor}>
            <section>
              { fetchResult &&
                <div className="section_header">
                  <h1 className='section_title'> Recent Anime </h1>
                  <div className="section_navbar">
                  <BlueButton isDisabled={!(fetchResult.currentPage > 1) || !isLoaded } onClick={() => {handlePrevPage(fetchResult.currentPage)}}>
                      <FontAwesomeIcon icon={faArrowLeft} size='xl' />
                  </BlueButton>
                  <p> {fetchResult.currentPage} </p>
                  <BlueButton isDisabled={!(fetchResult.hasNextPage) || !isLoaded } onClick={() => {handleNextPage(fetchResult.currentPage)}}>
                      <FontAwesomeIcon icon={faArrowRight} size='xl' />
                  </BlueButton>
                  </div>
                </div>
              }

              { isLoaded ? 
                <>
                  <div className='cards'>
                      { fetchResult && fetchResult.results.map((anime, index) => {
                          return (
                              <AnimeCards  episodeNumber={anime.episodeNumber} key={index} id={anime.id} image={anime.image} title={anime.title.userPreferred}></AnimeCards>
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
        </RecentAnimeSectionContainer>
    )
}

export default RecentAnimeSection