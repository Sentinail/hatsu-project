import { styled } from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => {return props.$secondaryColor}};
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`