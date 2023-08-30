import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;

    .search_bar {
        border-radius: 5px;
        overflow: hidden;
    }   

    input {
        height: 40px;
        border: none;
        color: #000000;
        width: 100vw;
        max-width: 300px;
        outline: none;
        padding: 10px;
    }

    button {
        width: 40px;
        height: 40px;
        border: none;
        background-color: ${props => {return props.$tertiaryColor}};
        cursor: pointer;
    }
`