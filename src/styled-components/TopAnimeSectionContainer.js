import { styled } from "styled-components";

export const TopAnimeSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    section {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .section_title {
        font-size: 3rem;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(5, 200px);
        justify-content: center;
        justify-items: center;
        gap: 20px;

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