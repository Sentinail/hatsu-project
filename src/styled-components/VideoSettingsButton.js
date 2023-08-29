import { styled } from "styled-components";

export const VideoSettingsButton  = styled.button`
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    background-color: ${props => {return props.$secondaryColor}};
`