import React, { useState, useEffect, useContext, useRef } from "react";
import { WatchAnimeContainer } from "../styled-components/WatchAnimeContainer";
import { themeContext } from "../context/themeContext";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getAnimeInfo } from "../utilities/GogoAnime";
import { AnimeEpisodesListContainer } from "../styled-components/AnimeEpisodesListContainer";
import BlueButton from "./BlueButton";
const loadingMiku = require("../assets/icons/loading.gif");

const AnimeEpisodeList = ({ episodes, nextAiringTime }) => {
	const { primaryColor, tertiaryColor } = useContext(themeContext);
	const [currentPage, setCurrentPage] = useState(0);
	const [windowSize, setWindowSize] = useState(50);
	const [animeEpisodes, setAnimeEpisodes] = useState();
    const [ currentCount, setCurrentCount ] = useState(nextAiringTime)
    const navigate = useNavigate()

	useEffect(() => {
		episodes.sort((a, b) => a.number - b.number);
		const visibleAnimeEpisodes = [];

		for (let i = currentPage; i < episodes.length; i++) {
			if (i >= currentPage + windowSize) {
				break;
			} else {
				visibleAnimeEpisodes.push(episodes[i]);
			}
		}

		setAnimeEpisodes(visibleAnimeEpisodes);
	}, [currentPage]);

    useEffect(() => {
        if (nextAiringTime) {
            const countDown = setInterval(() => {
                if (currentCount <= 0 ) {
                    return
                }
    
                setCurrentCount(prevCount => prevCount - 1)
            }, 1000)
    
            return () => {
                clearInterval(countDown)
            }
        }
    }, [])

    function formatTime(seconds) {
            if (seconds <= 0) {
                return "Airing..."
            }

            const days = Math.floor(seconds / 86400); 
            seconds %= 86400;
    
            const hours = Math.floor(seconds / 3600); 
            seconds %= 3600;
    
            const minutes = Math.floor(seconds / 60);
            seconds %= 60;
    
            const parts = [];
            if (days > 0) {
                parts.push(`${days} day${days !== 1 ? "s" : ""}`);
            }
            if (hours > 0) {
                parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
            }
            if (minutes > 0) {
                parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
            }
            if (seconds > 0) {
                parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`);
            }
    
            return parts.join(", ");
    }

	const handlePage = (page) => {
		setCurrentPage(windowSize * page);
	};

    const handleWatch = (id) => {
        navigate(`${id}`)
    }

	
	const pages = [];

    const numberOfPages = Math.floor(episodes.length / windowSize);
	for (let i = 0; i <= numberOfPages; i++) {
		pages.push(
			<BlueButton
				key={i}
				className={"page_item"}
				onClick={() => {
					handlePage(i);
				}}
			>
				{i + 1}
			</BlueButton>
		);
	}

	return (
		<AnimeEpisodesListContainer
			$primaryColor={primaryColor}
			$tertiaryColor={tertiaryColor}
		>
			{animeEpisodes && (
				<>
					<div className="episodes_container">
						<div className="episode_lists">
							<p className="title"> Episodes : </p>
							{animeEpisodes.map((anime, index) => {
								return (
									<BlueButton
										className="anime_cell"
										key={index}
                                        onClick={() => {handleWatch(anime.id)}}
									>
										Ep: {anime.number} | {anime.title}
									</BlueButton>
								);
							})}
						</div>
						<div className="episode_pages">
							<p className="title"> Pages : </p>
							{pages}
						</div>
					</div>
				</>
			)}
			<div className="next_ep">
                { nextAiringTime &&
                    <p> Next Episode On : ({formatTime(currentCount)}) </p>
                }
			</div>
		</AnimeEpisodesListContainer>
	);
};

const WatchAnime = () => {
	const { primaryColor, secondaryColor, tertiaryColor } =
		useContext(themeContext);
	const [fetchResult, setFetchResult] = useState();
	const [loaded, setLoaded] = useState(false);
	const { anime } = useParams();
	const descriptionRef = useRef();

	useEffect(() => {
		setLoaded(false);

		const getInfoAnime = async () => {
			try {
				const result = await getAnimeInfo(anime);
				setFetchResult(result);
				setLoaded(true);
			} catch (err) {
				console.log(err);
			}
		};

		getInfoAnime();
	}, []);

	useEffect(() => {
		if (descriptionRef.current) {
			descriptionRef.current.innerHTML = fetchResult.description;
		}
	}, [loaded]);

	const findExistingTitle = () => {
		if (fetchResult.title) {
			if (fetchResult.title.english) {
				return fetchResult.title.english
			} else if (fetchResult.title.romaji) {
				return fetchResult.title.romaji
			} else {
				return fetchResult.title.native
			}
		}
	}

	return (
		<WatchAnimeContainer $tertiaryColor={tertiaryColor}>
			<>
				{loaded ? (
					<div className="anime_info">
						<div className="anime_watch">
							<Outlet></Outlet>
						</div>

						<AnimeEpisodeList
							episodes={fetchResult.episodes}
                            nextAiringTime={fetchResult.nextAiringEpisode?.timeUntilAiring}
						></AnimeEpisodeList>

						<div className="info_card">
							<img
								src={fetchResult.image}
								alt={fetchResult.title.romaji}
							/>
							<div className="anime_information">
								<div className="descriptions">
									<h1> {findExistingTitle()} </h1>
									<p ref={descriptionRef}></p>
								</div>

								<div className="categories">
									<p>
										Other Name:{" "}
										{fetchResult.synonyms.join(" | ")}{" "}
									</p>
									<p>Status: {fetchResult.status}</p>
									<p>
										Release Date: {fetchResult.releaseDate}{" "}
									</p>
									<p>Type: {fetchResult.type}</p>
									<p>
										Total Episodes:{" "}
										{fetchResult.totalEpisodes}
									</p>
									<p>Sub || Dub: {fetchResult.subOrDub} </p>
									<p>
										Genres: {fetchResult.genres.join(" | ")}
									</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="loading_container">
						<img
							className="loading"
							src={loadingMiku}
							alt="Loading..."
						/>
					</div>
				)}
			</>
		</WatchAnimeContainer>
	);
};

export default WatchAnime;
