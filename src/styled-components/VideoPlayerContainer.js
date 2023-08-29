import { styled } from "styled-components";

export const VideoPlayerContainer = styled.div`
    position: relative;
    width: 100vh;
    max-width: 1000px;
    min-width: 300px;
    
    
    .option_container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        & img {
            width: 15px;
            height: auto;
            transform: rotate(${props => {return props.$optionsIsActive ? 360 : 0}}deg);
            transition: all 1s ease-in-out;
        }
    }
`