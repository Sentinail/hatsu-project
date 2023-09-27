import { styled } from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    background-color: ${props => {return props.$secondaryColor}};
    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .search_page_search_container {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 40px;
        align-items: center;

        @media screen and (max-width: 700px) {
           justify-content: center;
        }
    }

    .filters {
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        width: 1040px;

        @media screen and (max-width: 1120px) {
            width: 1040px;
        }

        @media screen and (max-width: 1160px) {
            width: 830px;
        }

        @media screen and (max-width: 910px) {
            width: 620px;
        }

        @media screen and (max-width: 700px) {
            width: 410px;
        }

        @media screen and (max-width: 490px) {
            display: block;
            width: 100%;
        }
    }

    .results {
        width: 100%;
        padding: 20px;
    }
`