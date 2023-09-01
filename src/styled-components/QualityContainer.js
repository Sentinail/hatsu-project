import { styled } from "styled-components";

export const QualityContainer = styled.div`
    width: 100px;
    height: ${props => {return props.$isActive ? 150 : 0}}px;
    opacity: ${props => {return props.$isActive ? 1 : 0}};
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 0 0 0;
    overflow-y: scroll;
    margin: 5px;
    background-color: rgba(43, 51, 63, 0.7);
    position: absolute;
    bottom: 100%;
    right: 0;
    transition: all 0.3s ease-in-out;

    .quality_options {
        border: none;
        border: 1px solid transparent;
        background-color: transparent;
        cursor: pointer;
        
        &:hover {
            border: 1px solid black;
        }
    }
`