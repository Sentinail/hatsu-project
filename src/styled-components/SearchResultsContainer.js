import { styled } from "styled-components";

export const SearchResultsContainer = styled.div`

    .cards {
        display: grid;
        grid-template-columns: repeat(5, 200px);
        gap: 20px;
        justify-content: center;

        @media screen and (max-width: 1120px) {
            grid-template-columns: repeat(4, 200px);
        }

        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(3, 200px);
        }

        @media screen and (max-width: 680px) {
            grid-template-columns: repeat(2, 200px);
        }

        @media screen and (max-width: 480px) {
            grid-template-columns: repeat(2, 150px);
        }
    }
`