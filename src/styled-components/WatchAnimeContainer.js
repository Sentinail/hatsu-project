import { styled } from "styled-components";

export const WatchAnimeContainer  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
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
        gap: 20px;

        .anime_episodes {
            width: 100vw;
            min-height: 100px;
            max-width: 1000px;

            img {
                height: auto;
            }
        }

        .info_card {
            width: 100vw;
            display: flex;
            min-height: 100px;
            max-width: 1000px;
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