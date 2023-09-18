  import React from 'react'
  import { FooterContainer } from '../styled-components/FooterContainer'
  import BlueButton from './BlueButton'
  const logo = require("../assets/icons/miku.png")
  const heartIcon = require("../assets/icons/heart-icon.png")

  const Footer = () => {

    return (
      <FooterContainer $primaryColor={"#0D111A"}> 
        <div className="wrapper_top">
          <p> Copyright © hatsu.vercel.app. All Rights Reserved </p>
          <BlueButton className='coffee_button'> <a href="https://www.buymeacoffee.com/Sentinail"> Buy Me A Coffee ☕ </a> </BlueButton>
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