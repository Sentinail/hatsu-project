import React, {useContext} from 'react'
import { FooterContainer } from '../styled-components/FooterContainer'
import { themeContext } from '../context/themeContext'

const Footer = () => {
  const { primaryColor } = useContext(themeContext)

  return (
    <FooterContainer $primaryColor={primaryColor}></FooterContainer>
  )
}

export default Footer