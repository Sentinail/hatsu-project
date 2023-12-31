import axios from "axios";

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} query - the anime you want to search
 * @param {number=1} pageNum - the page of the anime you want to search
 * @returns {object} list of animes
 */
export const searchAnime = async (query, page = 1) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/${query}`, {params: {page: page}})
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @param {number=1}  type - The type of anime to get, i.e. sub or dub. 1: Japanese Dub, English Sub; 2: English Dub, No Sub; 3: Chinese Dub, English Sub.
 * @returns {object} list of recent eps
 */
export const getRecentEpisodes = async (page = 1, perPage = 10, provider = "gogoanime") => {
    // const result = await axios.get(`https://api.consumet.org/meta/anilist/recent-episodes`, {params: {page: page, perPage: perPage, provider: provider}}) 
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/recent-episodes`) 
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @returns {object} list of recent eps
 */
export const getPopularAnime = async (page = 1, perPage = 10) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/popular`, {params: {page: page, perPage: perPage}})
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @returns {object} list of recent eps
 */
export const getTopAiringAnime = async (page = 1, perPage = 10) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/trending`, {params: {page: page, perPage: perPage}})
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} id - The GogoAnime ID of the anime; i.e. provided by searching for said anime and selecting the correct one.
 * @returns {object} list of recent eps
 */
export const getAnimeInfo = async (id, provider = "gogoanime") => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/info/${id}`, {params: {provider: provider}})
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} id - The GogoAnime ID of the anime; i.e. provided by searching for said anime and selecting the correct one.
 * @returns {object} list of recent eps
 */
export const getAnimeEPStreamLinks = async (episodeId) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/watch/${episodeId}`)
    return result.data
}

export const getAiringAnimeSchedule = async (page = 1, perPage = 10, weekStart = "today's date", weekEnd = "today's date + 7 days", notYetAired = false) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/meta/anilist/airing-schedule`, {
        params: {   
            perPage,
        }
    })
    return result.data
}