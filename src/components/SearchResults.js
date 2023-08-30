import React, { useEffect, useState } from 'react'
import { SearchResultsContainer } from '../styled-components/SearchResultsContainer'
import AnimeCards from '../components/AnimeCards'
import { useParams } from 'react-router-dom'
import { searchAnime } from '../utilities/GogoAnime'

const SearchResults = () => {
    const [ result, setResult ] = useState()
    const { query } = useParams()

    useEffect(() => {
        const getAnime = async () => {
            const data = await searchAnime(query)
            setResult(data)
        }
        
        getAnime()
    }, [query])

    return (
        <SearchResultsContainer>
            {result && 
            <>
                <h1> Search Results: {result.results.length} </h1>  
                <div className="cards">
                    { result.results &&
                        result.results.map((anime, index) => {
                            return (
                                <AnimeCards key={index} id={anime.id} image={anime.image} title={anime.title} episodeNumber={null}></AnimeCards>
                            )
                        })
                    }
                    
                </div>
            </>
            }
        </SearchResultsContainer>
    )

}

export default SearchResults