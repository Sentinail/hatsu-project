import React, { createContext, useContext, useState } from 'react'

const cacheContext = createContext()

export const useHomeContentCache = () => {
    return useContext(cacheContext)
}

const HomeContentCacheProvider = ({ children }) => {
    const [ popularAnimeCache, setPopularAnimeCache ] = useState()
    const [ trendingAnimeCache, setTrendingAnimeCache ] = useState()
    const [ recentAnimeEPCache,  setRecentAnimeEPCache] = useState()
    const [ homeCarouselCache, setHomeCarouselCache ] = useState()
    const [ homeCarouselCardsCache, setHomeCarouselCardsCache ] = useState([])

    const value = {
        popularAnimeCache,
        setPopularAnimeCache,
        trendingAnimeCache,
        setTrendingAnimeCache,
        homeCarouselCache,
        setHomeCarouselCache,
        recentAnimeEPCache,
        setRecentAnimeEPCache,
        homeCarouselCardsCache,
        setHomeCarouselCardsCache
    }

    return (
        <cacheContext.Provider value={value}>
             {children}
        </cacheContext.Provider>
    )
}

export default HomeContentCacheProvider