import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    position: sticky;
    opacity: ${props => {return props.$scrollingUp ? 1 : 0}};
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: ${props => {return props.$primaryColor}};
    display: flex;
    flex: 0 0 0;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0px -1px 51px 32px rgba(0,0,0,0.75);
    z-index: 100;
    transition: opacity 0.3s ease-in-out;

    .header_item_left {
        position: relative;
        align-items: center;
        display: flex;
        cursor: pointer;
        
        .logo {
            width: 70px;
            transform: scaleX(-1);
            position: relative;
            bottom: 5px;
        }

        .heart {
            width: 35px;
            position: relative;
            bottom: 10px;
        }
    }

    .header_item_right {
        display: flex;
        align-items: center;
        gap: 20px;

        .sign_in_button {
            height: 40px;
            width: 150px;
        }

        .search_container {
            button {
                width: 40px;
                height: 40px;
                border: none;
                background-color: ${props => {return props.$tertiaryColor}};
                cursor: pointer;
                border-radius: 5px;
            }
        }
    
        @media screen and (max-width: 800px) {
            display: none
        }
    }
`