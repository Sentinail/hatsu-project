import styled from "styled-components";

export const BlueButtonContainer = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: ${props => {return props.$tertiaryColor}};
    cursor: pointer;
    border-radius: 5px;

    &:disabled {
        opacity: 0.5;
        cursor: default !important;
    }
`   