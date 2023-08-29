import React, { useContext } from 'react'
import { HomeContainer } from '../styled-components/HomeContainer'
import { themeContext } from '../context/themeContext'

const Home = () => {
  const { secondaryColor } = useContext(themeContext)
  
  return (
    <HomeContainer $secondaryColor={secondaryColor}></HomeContainer>
  )
}

export default Home