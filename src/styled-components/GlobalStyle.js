import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
        color: white;
    }

    span {
        color: ${props => {return props.$tertiaryColor}};
    }

    .error {
        color: ${props => {return props.$tertiaryColor}} !important;
    }

    ::-webkit-scrollbar {
        width: 8px; 
    }

    
    ::-webkit-scrollbar-track {
        background: ${props => {return props.$secondaryColor}};
    }

    
    ::-webkit-scrollbar-thumb {
        background: ${props => {return props.$tertiaryColor}};
    }

    
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => {return props.$tertiaryColor}};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid green;
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px ${props => {return props.$primaryColor}}70 inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    .swiper {
        cursor: grab;
    }
`

export default GlobalStyle