import React, { useContext } from 'react'
import { HomeContainer } from '../styled-components/HomeContainer'
import { themeContext } from '../context/themeContext'
import HomeCarousel from '../components/HomePageCarousel'

const Home = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
  
  return (
    <HomeContainer $primaryColor={primaryColor}  $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
      <section className='carousel_container'>
        <HomeCarousel></HomeCarousel>
      </section>
      <div className="divider" />
      <section className='content_container'>

      </section>
    </HomeContainer>
  )
}

export default Home