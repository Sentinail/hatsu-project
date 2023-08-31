import React, { useContext, useEffect, useState }  from 'react'
import { HeaderContainer } from '../styled-components/HeaderContainer'
import { themeContext } from '../context/themeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Burger from './Burger'
import { MobileNavbarContainer } from '../styled-components/MobileNavbarContainer'
const logo = require("../assets/icons/miku.png")
const heartIcon = require("../assets/icons/heart-icon.png")


const Header = () => {
    const { primaryColor, tertiaryColor } = useContext(themeContext)
    const [ navbarIsActive, setNavbarIsActive ] = useState(false)
    const [ isScrollingDown, setIsScrollingDown ] = useState(false)

    const handleScroll = (event) => {
        if (window.scrollY > 80) {
            if (event.deltaY > 0) {
                setIsScrollingDown(true)
            } else if (event.deltaY < 0) {
                setIsScrollingDown(false)
            }
        } else if (window.scrollY <= 80) {
            setIsScrollingDown(false)
        }
    }

    useEffect(() => {
        window.addEventListener("wheel", handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll);
        }
    }, [])

    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate("/")
    }

    const handleSearch = () => {
        setNavbarIsActive(false)
        navigate("/search")
    }

    return (
        <HeaderContainer $isScrollingDown={isScrollingDown} $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
            <div className="header_item_left" onClick={handleLogoClick}>
                <img className='logo' src={logo} alt="miku" />
                <h1> Hatsu </h1>
                <img className='heart' src={heartIcon} alt="heart" />
            </div>
            <div className="header_item_right">
                <div className="search_container">
                    <button onClick={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                    </button>
                </div>
                <button className='sign_in_button'>Sign In</button>
            </div>
            <Burger size={0.4} isActive={navbarIsActive} onClick={() => {setNavbarIsActive(prevNavbarIsActive => !prevNavbarIsActive)}}></Burger>
            <MobileNavbarContainer $tertiaryColor={tertiaryColor} $navbarIsActive={navbarIsActive} $primaryColor={primaryColor}>
                <div className='navbar_item'>
                    <button className='sign_in_button'>Sign In</button>
                </div>
                <div className='navbar_item'>
                    <button onClick={handleSearch} className='search_button'>Search</button>
                </div>
            </MobileNavbarContainer>
        </HeaderContainer>
    )
}

export default Header