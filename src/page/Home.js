import React, { useContext } from 'react'
import { HomeContainer } from '../styled-components/HomeContainer'
import { themeContext } from '../context/themeContext'
import HomeCarousel from '../components/HomePageCarousel'
import TrendingAnimeSection from '../components/TrendingAnimeSection'
import PopularAnimeSectionVer2 from '../components/PopularAnimeSectionVer2'
import RecentAnimeSection from '../components/RecentAnimeSection'
import AiringAnime from '../components/AiringAnime'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
  
  return (
      <>
      <Helmet>
          <title>Hatsu | Home</title>
          <meta
            name="description"
            content="Discover trending animes, watch recent anime episodes, explore airing animes, and find popular animes on Hatsu - Your Ultimate Anime Streaming Destination."
          />
      </Helmet>
      <HomeContainer $primaryColor={primaryColor}  $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        <section className='carousel_container'>
          <HomeCarousel></HomeCarousel>
        </section>
        <div className='section'>
          <section className='content'>
            <TrendingAnimeSection></TrendingAnimeSection>
            <PopularAnimeSectionVer2></PopularAnimeSectionVer2>
            <RecentAnimeSection></RecentAnimeSection>
          </section>
          <section className="support_me">
            <AiringAnime></AiringAnime>
          </section>
        </div>
      </HomeContainer>
      <Footer></Footer>
      </>
      

  )
}

export default Home