import { styled } from "styled-components";

export const TestAppContainer = styled.div`
    .container {
        display: flex;
        gap: 40px;

        .right {
            max-height: 790px;
            overflow: scroll;
        }

        @media screen and (max-width: 1450px) {
            flex-direction: column;
        }
    }
`