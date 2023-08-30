import { styled } from "styled-components";

export const GridCardContainer = styled.div`

    .image {
        position: relative;
        width: 100%;
        height: auto;
        aspect-ratio: 0.707739127357656;

        .episode {
            position: absolute;
            bottom: 0;
            text-align: center;
            width: 100%;
            background-color: ${props => {return props.$tertiaryColor}};
        }

        img {
            width: 100%;
            height: auto;
            aspect-ratio: 0.707739127357656;
            object-fit: cover;
        }

        .curtain {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 0%;
            background-color: ${props => {return props.$secondaryColor}}70;
            position: absolute;
            justify-content: center;
            align-items: center;
            top: 0;
            gap: 20px;
            overflow: hidden;

            button {
                height: 40px;
                width: 150px;
                border: none;
                border-radius: 5px;
                background-color: ${props => {return props.$tertiaryColor}};
                cursor: pointer;
                transition: all 0.3s ease-in-out;
            }

            transition: all 0.3s ease-in-out;
        }

        &:hover {
            .curtain {
                height: 100%;
            }
        }
    }
`