import { styled } from "styled-components";

export const PasswordResetContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: ${props => {return props.$secondaryColor}};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`