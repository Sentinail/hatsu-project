import styled from "styled-components";

export const BookmarksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    border: 1px solid ${props => {return props.$tertiaryColor}};
    position: relative;
    
    
    h1 {
        text-align: start;
        width: 100%;
    }

    .sticker {
        position: absolute;
        bottom: calc(100% - 5px);
        left: 0;
        width: 100px;
        height: auto;
    }

    .bookmark_cell_container {
        width: 100%;
        display: flex;
        gap: 20px;

        .bookmark_cell {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: left;
            padding-left: 20px;
            padding-right: 20px;
        }

        .remove {
            aspect-ratio: 1/1;
        }
    }
    
`   