import axios from "axios";

const anilistURL = "https://graphql.anilist.co";

export const anilistGetAiringSchedules = async (page, perPage) => {
    const query = `
        query($page: Int, $perPage: Int) {
            Page(page: $page, perPage: $perPage) {
                airingSchedules(notYetAired: true) {
                    media {
                        id
                        coverImage {
                            medium
                        }
                        title {
                            romaji
                            english
                            native
                            userPreferred
                        }
                    }
                    episode
                    airingAt
                }
            }
        }
    `;
    const variables = {
        page,
        perPage
    };
    try {
        const result = await axios.post(anilistURL, {
            query,
            variables
        });
        return result.data
    } catch (err) {
        console.log(err);
    }
};

export const anilistGetRecentEpisodes = async (page, perPage) => {
    const secondsUnixEpoc = parseInt(Date.now() / 1000)
    const secondsUnixWeek = secondsUnixEpoc - 604800
    
    const query = `
        query($page: Int, $perPage: Int) {
            Page(page: $page, perPage: $perPage) {
                pageInfo {
                    hasNextPage
                    currentPage
                }
                airingSchedules(sort: TIME_DESC, airingAt_lesser: ${secondsUnixEpoc}, airingAt_greater: ${secondsUnixWeek}) {
                    media {
                        id
                        coverImage {
                          extraLarge
                          large
                          medium
                          color
                        }
                        title {
                          romaji
                          english
                          native
                          userPreferred
                        }
                        updatedAt
                      }
                    episode
                }
            }
        }
    `;
    const variables = {
        page,
        perPage
    };

    try {
        const result = await axios.post(anilistURL, {
            query,
            variables
        });
        return result.data
    } catch (err) {
        console.log(err);
    }
}
