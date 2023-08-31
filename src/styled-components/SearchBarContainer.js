import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;

    .search_bar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }   

    input {
        height: 40px;
        border: none;
        color: #000000;
        width: 100vw;
        outline: none;
        padding: 10px;
        max-width: 300px;
    }

    button {
        width: 40px;
        height: 40px;
        border: none;
        background-color: ${props => {return props.$tertiaryColor}};
        cursor: pointer;
        flex-shrink: 0;
        flex-grow: 0;
    }
`