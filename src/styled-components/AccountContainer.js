import { styled } from "styled-components";

export const AccountContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    background-color: ${props => {return props.$secondaryColor}};
`