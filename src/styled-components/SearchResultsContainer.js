import { styled } from "styled-components";

export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .loading {
        width: 100px;
        align-self: center;
    }

    .cards {
        display: grid;
        gap: 20px;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, 200px);
        width: 1100px;

        @media screen and (max-width: 1230px) {
            width: 660px;
        }

        @media screen and (max-width: 800px) {
            width: 420px;
        }

        @media screen and (max-width: 570px) {
            width: 200px;
        }
    }
`