import { styled } from "styled-components";

export const TopAnimeSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1080px;
    position: relative;

    .loading_container {
        width: 300px;
        min-height: 699px;

        display: flex;
        justify-content: center;
        align-items: center;

        .loading {
            width: 100px;
        }

        @media screen and (max-width: 1120px) {
            min-height: 1058px;
        }

        @media screen and (max-width: 900px) {
            min-height: 1393px;
        }

        @media screen and (max-width: 680px) {
            min-height: 1752px;
        }

        @media screen and (max-width: 480px) {
            min-height: 1399px;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    
    .section_header {
        display: flex;
        justify-content: space-between;
        width: 1080px;
        align-items: center;
        max-width: 90vw;

        .section_navbar {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .section_title {
            font-size: 3rem;
            text-align: start;
            width: 100%;
        }

        @media screen and (max-width: 1120px) {
            width: 860px;
        }

        @media screen and (max-width: 900px) {
            width: 640px;
        }

        @media screen and (max-width: 680px) {
            position: sticky;
            top: 65px;
            z-index: 2;

            flex-direction: column;
            .section_title {
                font-size: 2rem;
                text-align: center;
                width: 100%;
            }
        }
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