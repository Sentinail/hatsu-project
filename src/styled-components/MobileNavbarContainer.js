import { styled } from "styled-components";

export const MobileNavbarContainer = styled.div`
    display: none;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    height: ${props => {return props.$navbarIsActive ? 110 : 0}}px;
    background-color: ${props => {return props.$primaryColor}};
    transition: all 0.3s ease-in-out;
    overflow-y: hidden;
    padding-left: 5px;
    padding-right: 5px;

    .navbar_item {
        width: 100%;
        border: 1px solid ${props => {return props.$tertiaryColor}};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sign_in_button {
        width: 100%;
        height: 40px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .search_button {
        width: 100%;
        height: 40px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`