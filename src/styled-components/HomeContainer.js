import { styled } from "styled-components";
const wallpaper = require("../assets/icons/miku_wallpaper.jpg");

export const HomeContainer = styled.div`
    width: 100%;    
    background-color: ${props => {return props.$secondaryColor}};

    .carousel_container {
        width: 100%;
        overflow: hidden;
        padding: 30px;
        background-image: url(${wallpaper});
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #000000;
        opacity: 0.8;
        

        @media screen and (max-width: 430px){
            padding: 0;
        }
    }

    .divider {
        width: 100%;
        height: 50px;
        background-color: ${props => {return props.$primaryColor}};
        box-shadow: 0px -1px 51px 32px rgba(0,0,0,0.75);
    }

    .content_container {
        width: 100%;
        min-height: 100vh;
    }
`