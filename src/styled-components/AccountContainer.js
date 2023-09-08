import { styled } from "styled-components";

export const AccountContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    background-color: ${props => {return props.$secondaryColor}};
    display: flex;
    justify-content: center;
    padding: 20px;
    padding-top: 40px;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 1000px;
        gap: 20px;
    }

    .logout_button {
        width: 200px;
        align-self: flex-end;
    }
`