import axios from "axios";

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} query - the anime you want to search
 * @param {number=1} pageNum - the page of the anime you want to search
 * @returns {object} list of animes
 */
export const searchAnime = async (query, pageNum = 1) => {
    const result = await axios.get(`https://api.consumet.org/anime/gogoanime/${query}`, {params: {page: pageNum}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @param {number=1}  type - The type of anime to get, i.e. sub or dub. 1: Japanese Dub, English Sub; 2: English Dub, No Sub; 3: Chinese Dub, English Sub.
 * @returns {object} list of recent eps
 */
export const getRecentEpisodes = async (pageNum = 1, type = 1) => {
    const result = await axios.get(`https://api.consumet.org/anime/gogoanime/recent-episodes`, {params: {page: pageNum, type: type}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @returns {object} list of recent eps
 */
export const getTopAiringAnime = async (pageNum = 1) => {
    const result = await axios.get(`https://api.consumet.org/anime/gogoanime/top-airing`, {params: {page: pageNum}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} id - The GogoAnime ID of the anime; i.e. provided by searching for said anime and selecting the correct one.
 * @returns {object} list of recent eps
 */
export const getAnimeInfo = async (id) => {
    const result = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${id}`)
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} id - The GogoAnime ID of the anime; i.e. provided by searching for said anime and selecting the correct one.
 * @returns {object} list of recent eps
 */
export const getAnimeEPStreamLinks = async (episodeId, server="gogocdn") => {
    const result = await axios.get(`https://api.consumet.org/anime/gogoanime/watch/${episodeId}`, {params: {server: server}})
    console.log(result.data)
    return result.data
}



