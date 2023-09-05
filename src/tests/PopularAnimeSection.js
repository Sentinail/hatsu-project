import React, { useContext, useState, useEffect } from 'react'
import { PopularAnimeCellContinainer, PopularAnimeSectionContainer } from '../styled-components/PopularAnimeSectionContainer'
import { themeContext } from '../context/themeContext'
import { getPopularAnime } from '../utilities/GogoAnime'

const PopularAnimeCell = ({ title, id, image, status, releaseDate }) => {
    const { tertiaryColor } = useContext(themeContext)

    const handleClick = () => {
        console.log(id)
    }

    return (
        <PopularAnimeCellContinainer $tertiaryColor={tertiaryColor} onClick={handleClick}>
            <img className='image' src={image} alt={title.userPreferred} />
            <div className="info_container">
                <p className="title">{title.userPreferred}</p>
                <div className='info'>
                    <p>{status}</p>
                    <p>{releaseDate}</p>
                </div>
            </div>
        </PopularAnimeCellContinainer>
    )
}

const PopularAnimeSection = () => {
    const [ fetchResult, setFetchResult ] = useState()
    const { tertiaryColor } = useContext(themeContext)

    useEffect(() => {
        const setPopularAnime = async () => {
            try {
                const result = await getPopularAnime()
                console.log(result)
                setFetchResult(result)
            } catch (err) {
                console.log(err)
            }
        }

        setPopularAnime()
    }, [])


    return (
        <PopularAnimeSectionContainer $tertiaryColor={tertiaryColor}>
            <h1> Popular Anime </h1> 
            { fetchResult &&
                fetchResult.results.map((anime, index) => {
                    return (
                        <>
                            <PopularAnimeCell key={index} title={anime.title} id={anime.id} image={anime.image} status={anime.status} releaseDate={anime.releaseDate}>

                            </PopularAnimeCell>
                        </>
                    )
                })
            }
        </PopularAnimeSectionContainer>
    )
}

export default PopularAnimeSection