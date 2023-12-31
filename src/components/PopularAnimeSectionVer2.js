import React, { useContext, useEffect, useState} from 'react'
import AnimeCards from './AnimeCards'
import { getPopularAnime } from '../utilities/GogoAnime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BlueButton from './BlueButton'
import { PopularAnimeSectionContainerV2 } from '../styled-components/PopularAnimeSectionContainerV2'
import { themeContext } from '../context/themeContext'
import { useHomeContentCache } from '../context/homeContentCacheContext'
const mikuLoading = require("../assets/icons/loading.gif")

const PopularAnimeSectionVer2 = () => {
    const { secondaryColor, tertiaryColor } = useContext(themeContext)
    const { popularAnimeCache: fetchResult, setPopularAnimeCache: setFetchResult} = useHomeContentCache()
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {

      const getTopAnimeList = async () => {

        try {
          const result = await getPopularAnime()
          setFetchResult(result)
          setIsLoaded(true)
        } catch (err) {
          console.log(err)
        }
        
      }
      if (fetchResult === undefined) {
        getTopAnimeList()
      } else {
        setIsLoaded(true)
      }
    }, [])

    const handleNextPage = async (currentPage) => {
      if (fetchResult.hasNextPage) {
        setIsLoaded(false)
        const result = await getPopularAnime(Number(currentPage) + 1)
        setFetchResult(result)
        setIsLoaded(true)
      }
    }

    const handlePrevPage = async (currentPage) => {
      if (fetchResult.currentPage > 1) {
        setIsLoaded(false)
        const result = await getPopularAnime(Number(currentPage) - 1)
        setFetchResult(result)
      }
    }

    return (
        <PopularAnimeSectionContainerV2 $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
            <section>
              { fetchResult ?
                <div className="section_header">
                  <h1 className='section_title'> Popular Anime </h1>
                  <div className="section_navbar">
                  <BlueButton isDisabled={!(fetchResult.currentPage > 1) || !isLoaded} onClick={() => {handlePrevPage(fetchResult.currentPage)}}>
                      <FontAwesomeIcon icon={faArrowLeft} size='xl' />
                  </BlueButton>
                  <p> {fetchResult.currentPage} </p>
                  <BlueButton isDisabled={!(fetchResult.hasNextPage) || !isLoaded } onClick={() => {handleNextPage(fetchResult.currentPage)}}>
                      <FontAwesomeIcon icon={faArrowRight} size='xl' />
                  </BlueButton>
                  </div>
                </div>

                :

                <div className="section_header">
                  <h1 className='section_title'> Popular Anime </h1>
                  <div className="section_navbar">
                  <BlueButton isDisabled={true}>
                      <FontAwesomeIcon icon={faArrowLeft} size='xl' />
                  </BlueButton>
                  <p> null </p>
                  <BlueButton isDisabled={true}>
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
        </PopularAnimeSectionContainerV2>
    )
}

export default PopularAnimeSectionVer2