import { styled } from "styled-components";

export const SignUpFormContainer = styled.form`
    position: relative;
    width: 100%;
    max-width: 350px;
    border: 1px solid ${props => {return props.$primaryColor}};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-shadow: rgba(0, 0, 0, 0.75) 0px -1px 18px 1px;
    animation: slide-in-fade 0.3s ease-in-out;

    @keyframes slide-in-fade {
        0% { top: -100px; opacity: 0};
        100% { top: 0px; opacity: 1}
    }

    a {
        text-align: center;
    }

    .error {
        color: ${props => {return props.$primaryColor}};
        margin-top: 5px;
        font-size: 0.8rem;
    }

    .input_fields {
        display: flex;
        flex-direction: column;
        gap: 40px;

        .input_field {
            display: flex;
            flex-direction: column;

            input {
                border-top: none;
                border-right: none;
                border-left: none;
                border-image: initial;
                outline: none;
                border-bottom: 1px solid rgb(255, 255, 255);
                background-color: ${props => {return props.$secondaryColor}};

                &:focus {
                    border-color: ${props => {return props.$primaryColor}};
                }
            }
        }
    }

    .sign_up_button {
        width: 100%;
    }
`