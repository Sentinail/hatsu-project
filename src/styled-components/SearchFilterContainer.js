import { styled } from "styled-components";

export const SearchFilterContainer = styled.div`
    margin: 10px;

    .select__control {
        height: 20px;
        border-radius: 0;
        border-style: none;
        box-shadow: none;
        font-size: 14px;
    }

    .select__dropdown-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => {return props.$tertiaryColor}};
        height: 100%;
        aspect-ratio: 1/1;
    }
`