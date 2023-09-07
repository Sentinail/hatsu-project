import { styled } from "styled-components";

export const WatchAnimeContainer  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    gap: 20px;

    .loading_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 80px);

        & .loading {
            width: 80px;
        }
    }
    
    .anime_info {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;

        .info_card {
            /* width: 100vw; */
            width: 100%;
            display: flex;
            min-height: 100px;
            border: 1px solid ${props => {return props.$tertiaryColor}};
            gap: 20px;
            padding: 20px;
            align-items: center;

            img {
                width: 100%;
                max-width: 400px;
            }

            .anime_information {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .categories {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .descriptions {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
            }

            @media screen and (max-width: 1015px) {
                flex-direction: column;
            }
        }
    }
`