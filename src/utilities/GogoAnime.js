import axios from "axios";

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} query - the anime you want to search
 * @param {number=1} pageNum - the page of the anime you want to search
 * @returns {object} list of animes
 */
export const searchAnime = async (query, page = 1) => {
    const result = await axios.get(`https://consumet-org-api.vercel.app/meta/anilist/${query}`, {params: {page: page}})
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
export const getRecentEpisodes = async (page = 1, perPage = 10, provider = "gogoanime") => {
    const result = await axios.get(`https://consumet-org-api.vercel.app/meta/anilist/recent-episodes`, {params: {page: page, perPage: perPage, provider: provider}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @returns {object} list of recent eps
 */
export const getPopularAnime = async (page = 1, perPage = 10) => {
    const result = await axios.get(`https://consumet-org-api.vercel.app/meta/anilist/popular`, {params: {page: page, perPage: perPage}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {number=1} page - The page number of results to return.
 * @returns {object} list of recent eps
 */
export const getTopAiringAnime = async (page = 1, perPage = 10) => {
    const result = await axios.get(`https://consumet-org-api.vercel.app/meta/anilist/trending`, {params: {page: page, perPage: perPage}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} id - The GogoAnime ID of the anime; i.e. provided by searching for said anime and selecting the correct one.
 * @returns {object} list of recent eps
 */
export const getAnimeInfo = async (id, provider = "gogoanime") => {
    const result = await axios.get(`https://consumet-org-api.vercel.app/meta/anilist/info/${id}`, {params: {provider: provider}})
    console.log(result.data)
    return result.data
}

/**
 * Queries Anime On GogoAnime.
 *
 * @param {string} id - The GogoAnime ID of the anime; i.e. provided by searching for said anime and selecting the correct one.
 * @returns {object} list of recent eps
 */
export const getAnimeEPStreamLinks = async (episodeId) => {
    const result = await axios.get(`https://consumet-org-api.vercel.app/meta/anilist/watch/${episodeId}`)
    console.log(result.data)
    return result.data
}