import React, { useEffect, useState } from 'react'
import { SearchResultsContainer } from '../styled-components/SearchResultsContainer'
import AnimeCards from '../components/AnimeCards'
import { useParams } from 'react-router-dom'
import { searchAnime } from '../utilities/GogoAnime'
const loadingMiku = require("../assets/icons/loading.gif")

const SearchResults = () => {
    const [ result, setResult ] = useState(null);
    const [ loaded, setLoaded ] = useState(false);
    const { query } = useParams();

    useEffect(() => {
        const getAnime = async () => {
            const data = await searchAnime(query);
            setResult(data);
            setLoaded(true);
        };

        setLoaded(false)
        getAnime();
    }, [query]);

    return (
        <SearchResultsContainer>
            {loaded ? 
            <>
                <h1> Search Results: {result.results.length} </h1>  
                <div className="cards">
                    { result.results &&
                        result.results.map((anime, index) => (
                            <AnimeCards key={index} id={anime.id} image={anime.image} title={anime.title} episodeNumber={null}></AnimeCards>
                        ))
                    }
                </div>
            </>
            :
            <img className='loading' src={loadingMiku} alt="Loading..." />
            }
        </SearchResultsContainer>
    )
}

export default SearchResults;
