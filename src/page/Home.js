import React, { useContext, useState } from 'react'
import { HomeContainer } from '../styled-components/HomeContainer'
import { themeContext } from '../context/themeContext'
import HomeCarousel from '../components/HomePageCarousel'
import TrendingAnimeSection from '../components/TrendingAnimeSection'
import PopularAnimeSectionVer2 from '../components/PopularAnimeSectionVer2'
import RecentAnimeSection from '../components/RecentAnimeSection'

const Home = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
  
  return (
      <HomeContainer $primaryColor={primaryColor}  $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
      <section className='carousel_container'>
        <HomeCarousel></HomeCarousel>
      </section>
      <div className="divider" />
      <section className='content'>
        
        <TrendingAnimeSection></TrendingAnimeSection>
        <PopularAnimeSectionVer2></PopularAnimeSectionVer2>
        <RecentAnimeSection></RecentAnimeSection>
      </section>
    </HomeContainer>
  )
}

export default Home