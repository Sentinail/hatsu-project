import React, { useEffect, useState } from "react";
import {
	AiringAnimeContainer,
	AnimeAiringCellContainer,
} from "../styled-components/AiringAnimeContainer";
import { themeContext, useThemeContext } from "../context/themeContext";
import BlueButton from "./BlueButton";
import { useNavigate } from "react-router-dom";
import { useHomeContentCache } from "../context/homeContentCacheContext";
import { anilistGetAiringSchedules } from "../utilities/Anilist";
const timestamp = require("unix-timestamp");
const mikuLoading = require("../assets/icons/loading.gif");

const AnimeAiringCell = ({ anime, ...props }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/watch/${anime.media.id}`);
	};

	const timeStamp = timestamp.toDate((anime.airingAt)).toUTCString();

	return (
		<>
			<AnimeAiringCellContainer {...props}>
				<div className="anime_info">
					<div className="wrap">
						<img src={anime.media.coverImage.medium} alt={anime.media.title.romaji} />
						<p>
							{" "}
							<span>Next Episode : {timeStamp}</span>{" "}
						</p>
					</div>
					<p className="title"> {anime.media.title.romaji}</p>
				</div>
				<div className="airing_info">
					<BlueButton
						onClick={handleNavigate}
						className="episode_button"
					>
						{" "}
						Episode: {anime.episode}{" "}
					</BlueButton>
				</div>
			</AnimeAiringCellContainer>
		</>
	);
};

const AiringAnime = () => {
	const { tertiaryColor } = useThemeContext(themeContext);
	const {
		airingScheduleCache: fetchResult,
		setAiringScheduleCache: setFetchResult,
	} = useHomeContentCache();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const getAiringSchedules = async () => {
			const result = await anilistGetAiringSchedules(1, 10)
			setFetchResult(result);
			setIsLoaded(true);
		};

		if (!fetchResult) {
			getAiringSchedules();
		} else {
			setIsLoaded(true);
		}
	}, []);

	return (
		<AiringAnimeContainer $tertiaryColor={tertiaryColor}>
			{isLoaded ? (
				<>
					<div className="header">
						<h1> Airing Schedule </h1>
					</div>

					<div className="airing_anime_content">
						{fetchResult.data.Page.airingSchedules.map((media, index) => {
							return (
								<AnimeAiringCell
                                    anime={media}
									key={index}
								></AnimeAiringCell>
							);
						})}
					</div>
				</>
			) : (
				<div className="loading_container">
					<img
						className="loading"
						src={mikuLoading}
						alt="Loading..."
					></img>
				</div>
			)}
		</AiringAnimeContainer>
	);
};

export default AiringAnime;
