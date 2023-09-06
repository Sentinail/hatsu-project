import { styled } from "styled-components";

export const AnimeEpisodesListContainer = styled.div`


    .next_ep {
        display: flex;
        width: 100%;
        background-color: ${props => {return props.$primaryColor}};
        padding: 20px;
    }

    .episodes_container {
        width: 100vw;
        min-height: 100px;
        max-width: 1000px;
        display: flex;  
        position: relative;
        border: 1px solid ${props => {return props.$tertiaryColor }};
        border-bottom: none;
    }

    .title {
        width: 100%;
    }

    .episode_lists {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 70%;
        max-height: 50vh;
        overflow-y: scroll;
        padding: 20px;

        .anime_cell {
            display: flex;
            width: 100%;
            padding: 20px;
            align-items: center;
            height: auto;
        }
    }

    .episode_pages {
        width: 30%;
        padding: 20px;
        max-height: 50vh;
        overflow-y: scroll;

        .page_item {
            margin: 5px;
        }
    }
`