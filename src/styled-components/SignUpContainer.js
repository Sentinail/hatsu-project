import { styled } from "styled-components";

export const SignUpContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: ${props => {return props.$secondaryColor}};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`