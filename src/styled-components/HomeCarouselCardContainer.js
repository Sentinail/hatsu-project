import { styled } from "styled-components";

export const HomeCarouselCardContainer = styled.div`
    width: 100%;
    min-height: calc(80vh + 30px);
    position: relative;

    .loading {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
    }

    .container {
        width: 100%;
        min-height: 80vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 30px;
        /* border: 1px solid ${props => {return props.$tertiaryColor}}; */
        gap: 30px;
        position: relative;

        .watch_now_button {
            height: 40px;
            width: 150px;
            border: none;
            border-radius: 5px;
            background-color: ${props => {return props.$tertiaryColor}};
            cursor: pointer;
        }

        .anime_banner {
            width: 100vh;
            max-width: 460px;
            min-width: 360px;
            aspect-ratio: 460/650;
            border-radius: 5px;
        }

        .info {
            max-width: 600px;
            display: flex;
            flex-direction: column;
            gap: 30px;

            @media screen and (max-width: 950px) {
                padding: 30px;
                width: 100%;
                position: absolute;
                background-color: #00000070;
                align-items: center;
                border-radius: 5px;
            }
        }

        @media screen and (max-width: 680px) {
                border: none;
            }
    }
`