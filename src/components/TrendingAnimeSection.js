import React, { useContext, useEffect, useState} from 'react'
import { TopAnimeSectionContainer } from '../styled-components/TopAnimeSectionContainer'
import AnimeCards from './AnimeCards'
import { getTopAiringAnime } from '../utilities/GogoAnime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BlueButton from './BlueButton'
import { themeContext } from '../context/themeContext'
const mikuLoading = require("../assets/icons/loading.gif")

const TrendingAnimeSection = () => {
    const { secondaryColor, tertiaryColor } = useContext(themeContext)
    const [ fetchResult, setFetchResult ] = useState()
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {

          const getTopAnimeList = async () => {

            try {
              const result = await getTopAiringAnime()
              setFetchResult(result)
              setIsLoaded(true)
            } catch (err) {
              console.log(err)
            }
            
          }
          
          getTopAnimeList()
    }, [])

    const handleNextPage = async (currentPage) => {
      if (fetchResult.hasNextPage) {
        setIsLoaded(false)
        const result = await getTopAiringAnime(Number(currentPage) + 1)
        setFetchResult(result)
        setIsLoaded(true)
      }
    }

    const handlePrevPage = async (currentPage) => {
      if (fetchResult.currentPage > 1) {
        setIsLoaded(false)
        const result = await getTopAiringAnime(Number(currentPage) - 1)
        setFetchResult(result)
        setIsLoaded(true)
      }
    }

    return (
        <TopAnimeSectionContainer $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
            <section>
              { fetchResult &&
                <div className="section_header">
                  <h1 className='section_title'> Trending Anime </h1>
                  <div className="section_navbar">
                  <BlueButton isDisabled={!(fetchResult.currentPage > 1)} onClick={() => {handlePrevPage(fetchResult.currentPage)}}>
                      <FontAwesomeIcon icon={faArrowLeft} size='xl' />
                  </BlueButton>
                  <p> {fetchResult.currentPage} </p>
                  <BlueButton isDisabled={!(fetchResult.hasNextPage)} onClick={() => {handleNextPage(fetchResult.currentPage)}}>
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

export default TrendingAnimeSection