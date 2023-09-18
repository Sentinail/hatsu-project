import { styled } from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 30px;
    background-color: ${props => {return props.$primaryColor}};
    display: flex;
    flex-direction: column;
    gap: 60px;
    text-align: center;

    .coffee_button {
        padding: 10px;

        a {
            width: 100%;
            height: 100%;
            text-decoration: none;
        }
    }

    .wrapper_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-radius: 10px;

        @media screen and (max-width: 650px) {
            flex-direction: column;
            gap: 20px;
        }
    }

    .wrapper_bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .header_item_left {
        position: relative;
        align-items: center;
        display: flex;
        border-radius: 10px;
        
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
`