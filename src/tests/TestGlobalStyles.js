import { createGlobalStyle } from "styled-components";
 
export const TestGlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: ${props => {return props.$secondaryColor}};
    }
`