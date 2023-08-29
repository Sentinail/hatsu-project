import { styled } from "styled-components";

export const VideoSettingsContainer  = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    width: 250px;
    height: ${props => {return props.$optionsIsActive? 200 : 0}}px;
    opacity: ${props => {return props.$optionsIsActive? 1 : 0}};
    background-color: black;
    position: absolute;
    right: 0px;
    bottom: 30px;
    margin-right: 5px;
    margin-bottom: 5px;
    overflow-y: scroll;
    overflow-x: hidden;

    background-color: rgba(43, 51, 63, 0.7);
    transition: all 1s ease-in-out;
`