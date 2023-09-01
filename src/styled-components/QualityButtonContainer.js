import { styled } from "styled-components";

export const QualityButtonContainer = styled.div`
    position: relative;
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .cog_icon {
        transition: all 0.3s ease-in-out;
        transform: rotate(${props => {return props.$isActive ? 360 : 0}}deg);
    }
`