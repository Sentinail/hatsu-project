import styled from "styled-components";

export const BookmarksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    max-height: 1000px;
    overflow-y: scroll;
    border: 1px solid ${props => {return props.$tertiaryColor}};
    
    h1 {
        text-align: start;
        width: 100%;
    }

    .bookmark_cell_container {
        width: 100%;
        display: flex;
        gap: 20px;

        .bookmark_cell {
            width: 100%;
        }

        .remove {
            aspect-ratio: 1/1;
        }
    }
    
`   