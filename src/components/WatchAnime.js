import React, { useState, useEffect, useContext, useRef } from "react";
import { WatchAnimeContainer } from "../styled-components/WatchAnimeContainer";
import { themeContext } from "../context/themeContext";
import { Outlet, useParams } from "react-router-dom";
import { getAnimeInfo } from "../utilities/GogoAnime";
import { AnimeEpisodesListContainer } from "../styled-components/AnimeEpisodesListContainer";
import BlueButton from "./BlueButton";
const loadingMiku = require("../assets/icons/loading.gif");

const AnimeEpisodeList = ({ episodes }) => {
	const { tertiaryColor } = useContext(themeContext);
	const [currentPage, setCurrentPage] = useState(0);
    const [windowSize, setWindowSize] = useState(50)
	const [animeEpisodes, setAnimeEpisodes] = useState();

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

    const handlePage = (page) => {
        setCurrentPage(windowSize * page)
    }

    const numberOfPages = Math.floor(episodes.length / windowSize)
    const pages = []

    for (let i = 0; i <= numberOfPages; i++) {
        pages.push(<BlueButton key={i} className={"page_item"} onClick={() => {handlePage(i)}}>{i + 1}</BlueButton>)
    }

	return (
		<AnimeEpisodesListContainer $tertiaryColor={tertiaryColor}>
			{animeEpisodes && (
				<>
					<div className="episode_lists">
						{animeEpisodes.map((anime, index) => {
							return ( <BlueButton className="anime_cell" key={index}>Ep: {anime.number} | {anime.title}</BlueButton> );
						})}
					</div>
					<div className="episode_pages">
                        { pages }
                    </div>
				</>
			)}
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
						></AnimeEpisodeList>

						<div className="info_card">
							<img
								src={fetchResult.image}
								alt={fetchResult.title.english}
							/>
							<div className="anime_information">
								<div className="descriptions">
									<h1> {fetchResult.title.english} </h1>
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
