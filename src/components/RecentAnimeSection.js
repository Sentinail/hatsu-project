import React, { useContext, useEffect, useState } from "react";
import AnimeCards from "./AnimeCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BlueButton from "./BlueButton";
import { RecentAnimeSectionContainer } from "../styled-components/RecentAnimeSectionContainer";
import { themeContext } from "../context/themeContext";
import { useHomeContentCache } from "../context/homeContentCacheContext";
import { anilistGetRecentEpisodes } from "../utilities/Anilist";
const mikuLoading = require("../assets/icons/loading.gif");

const RecentAnimeSection = () => {
	const { secondaryColor, tertiaryColor } = useContext(themeContext);
	const {
		recentAnimeEPCache: fetchResult,
		setRecentAnimeEPCache: setFetchResult,
	} = useHomeContentCache();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const getAnimeList = async () => {
			try {
				const result = await anilistGetRecentEpisodes(1, 10);
				setFetchResult(result);
				setIsLoaded(true);
			} catch (err) {
				console.log(err);
				setIsLoaded(true);
			}
		};

		if (fetchResult === undefined) {
			getAnimeList();
		} else {
			setIsLoaded(true);
		}
	}, []);

	const handleNextPage = async (currentPage) => {
		if (fetchResult?.data.Page?.pageInfo?.hasNextPage) {
			setIsLoaded(false);
			const result = await anilistGetRecentEpisodes(
				Number(currentPage) + 1,
				10
			);
			setFetchResult(result);
			setIsLoaded(true);
		}
	};

	const handlePrevPage = async (currentPage) => {
		if (currentPage > 1) {
			setIsLoaded(false);
			const result = await anilistGetRecentEpisodes(
				Number(currentPage) - 1,
				10
			);
			setFetchResult(result);
			setIsLoaded(true);
		}
	};

	const airingSchedules = fetchResult?.data.Page.airingSchedules;
  const hasNextPage = fetchResult?.data.Page?.pageInfo.hasNextPage;
  const currentPage = fetchResult?.data.Page?.pageInfo.currentPage;

	return (
		<RecentAnimeSectionContainer
			$tertiaryColor={tertiaryColor}
			$secondaryColor={secondaryColor}
		>
			<section>
				{ fetchResult ? 
					<div className="section_header">
						<h1 className="section_title"> Recent Anime </h1>
						<div className="section_navbar">
							<BlueButton
								isDisabled={
									!(currentPage > 1) || !isLoaded
								}
								onClick={() => {
									handlePrevPage(currentPage);
								}}
							>
								<FontAwesomeIcon icon={faArrowLeft} size="xl" />
							</BlueButton>
							<p> {currentPage} </p>
							<BlueButton
								isDisabled={
									!hasNextPage || !isLoaded
								}
								onClick={() => {
									handleNextPage(currentPage);
								}}
							>
								<FontAwesomeIcon
									icon={faArrowRight}
									size="xl"
								/>
							</BlueButton>
						</div>
					</div>

					:

					<div className="section_header">
						<h1 className="section_title"> Recent Anime </h1>
						<div className="section_navbar">
							<BlueButton
								isDisabled={
									true
								}
							>
								<FontAwesomeIcon icon={faArrowLeft} size="xl" />
							</BlueButton>
							<p> null </p>
							<BlueButton
								isDisabled={
									true
								}
							>
								<FontAwesomeIcon
									icon={faArrowRight}
									size="xl"
								/>
							</BlueButton>
						</div>
					</div>
				}

				{isLoaded ? (
					<>
						<div className="cards">
							{fetchResult &&
								airingSchedules &&
								airingSchedules.map((anime, index) => {
									return (
										<AnimeCards
											episodeNumber={anime.episode}
											key={index}
											id={anime.media.id}
											image={anime.media.coverImage.large}
											title={anime.media.title.romaji}
										></AnimeCards>
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
			</section>
		</RecentAnimeSectionContainer>
	);
};

export default RecentAnimeSection;
