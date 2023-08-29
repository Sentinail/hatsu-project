import { styled } from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => {return props.$secondaryColor}};
`