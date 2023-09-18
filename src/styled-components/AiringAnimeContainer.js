import { styled } from "styled-components";

export const AiringAnimeContainer = styled.div`
    width: 100%;
    max-width: 750px;
    max-height: 2400px;

    .loading_container {
        width: 100%;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;

        .loading {
            width: 100px;
        }
    }

    .header {
        width: 100%;
        border: 1px solid ${props => {return props.$tertiaryColor}};
        border-radius: 10px;
        padding: 20px;
    }

    .airing_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }

    .airing_anime_content {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
        padding-top: 20px;
    }

    .title {
        text-align: start;
        width: 100%;    
    }

    @media screen and (max-width: 1650px){
           max-height: none;
    }
`

export const AnimeAiringCellContainer = styled.div`
    width: 100%;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    position: relative;

    .episode_button {
        min-width: 100px;
        padding: 10px;  
        top: 20px;
        right: 20px;
    }

    .wrap {
        display: flex;
        gap: 20px;
        align-items: center ;
    }

    .anime_info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
    
    
    img {
        width: 50px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
    }

    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 555px){
        flex-direction: column;
        align-items: start;
    }
`