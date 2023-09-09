import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
    &.costum_toast {
        right: 25px;
        .Toastify__toast-theme--light {
            background: ${props => {return props.$secondaryColor}};
            border: 1px solid ${props => {return props.$tertiaryColor}};
        }

        .Toastify__toast-body div {
            & div {
                color: ${props => {return props.$tertiaryColor}};
            }
        }

        .Toastify__progress-bar-theme--light {
            background: ${props => {return props.$tertiaryColor}};
        }
    }
`;