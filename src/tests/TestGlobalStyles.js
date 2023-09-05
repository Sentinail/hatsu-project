import { createGlobalStyle } from "styled-components";
 
export const TestGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
        color: white;
    }
    
    ::-webkit-scrollbar {
        width: 8px; 
    }

    
    ::-webkit-scrollbar-track {
        background: ${props => {return props.$secondaryColor}};
    }

    
    ::-webkit-scrollbar-thumb {
        background: ${props => {return props.$primaryColor}};
    }

    
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => {return props.$tertiaryColor}};
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: ${props => {return props.$secondaryColor}};
    }
`