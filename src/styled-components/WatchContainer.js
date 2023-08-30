import { styled } from "styled-components";

export const WatchContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => {return props.$secondaryColor}};
`