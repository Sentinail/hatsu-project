import { styled } from "styled-components";

export const AnimeEpisodesListContainer = styled.div`
    width: 100%;

    .next_ep {
        display: flex;
        width: 100%;
        border: 1px solid ${props => {return props.$tertiaryColor }};
        padding: 20px;
    }

    .episodes_container {
        width: 100%;
        min-height: 100px;
        display: flex;  
        position: relative;
        border: 1px solid ${props => {return props.$tertiaryColor }};
        padding-bottom: 20px;
        border-bottom: none;

        @media screen and (max-width: 530px) {
            flex-direction: column;
        }
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

        @media screen and (max-width: 530px) {
            width: 100%;
        }

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

        @media screen and (max-width: 530px) {
            width: 100%;
        }

        .page_item {
            margin: 5px;
        }
    }
`