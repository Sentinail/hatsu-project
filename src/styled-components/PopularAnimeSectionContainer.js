import { styled } from "styled-components";

export const PopularAnimeSectionContainer = styled.section`
    width: 300px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    h1 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

export const PopularAnimeCellContinainer = styled.div`
    width: 100%;
    background-color: ${props => {return props.$tertiaryColor}};
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 20px;
    border-radius: 5px;
    
    .image {
        width: 100%;
        max-width: 50px;
    }

    .info_container {
        display: flex;
        flex-direction: column;

        .info {
            display: flex;
            gap: 10px;
        }
    }
`