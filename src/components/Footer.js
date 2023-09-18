  import React from 'react'
  import { FooterContainer } from '../styled-components/FooterContainer'
  import BlueButton from './BlueButton'
import { themeContext, useThemeContext } from '../context/themeContext'
  const logo = require("../assets/icons/miku.png")
  const heartIcon = require("../assets/icons/heart-icon.png")

  const Footer = () => {
    const { primaryColor, secondaryColor } = useThemeContext(themeContext)

    return (
      <FooterContainer $primaryColor={primaryColor} $secondaryColor={secondaryColor}> 
        <div className="wrapper_top">
          <p className='copyright_quote'> Copyright © hatsu.vercel.app. All Rights Reserved </p>
          <div className="coffee_button_wrapper">
            <BlueButton className='coffee_button'> <a href="https://www.buymeacoffee.com/Sentinail"> Buy Me A Coffee ☕ </a> </BlueButton>
          </div>
        </div>
        <div className="wrapper_bottom">
          <div className="header_item_left">
              <img className='logo' src={logo} alt="miku" />
              <h1> Hatsu </h1>
              <img className='heart' src={heartIcon} alt="heart" />
          </div>
          <p> Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties. </p>
        </div>
      </FooterContainer>
    )
  }

  export default Footer