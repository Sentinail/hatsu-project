import React, { useContext, useEffect, useState, useRef }  from 'react'
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
    const { primaryColor, tertiaryColor } = useContext(themeContext);
    const [navbarIsActive, setNavbarIsActive] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);
    const prevScrollPosRef = useRef(0);

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleSearch = () => {
        setNavbarIsActive(false);
        navigate("/search");
    };

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos <= 80) {
            setScrollingUp(true);
        } else {
            setScrollingUp(currentScrollPos < prevScrollPosRef.current);
            prevScrollPosRef.current = currentScrollPos; 
        }
    };

    const handleNavigate = () => {
        navigate("/sign-in")
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderContainer $scrollingUp={scrollingUp} $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
            <div className="header_item_left" onClick={handleLogoClick}>
                <img className='logo' src={logo} alt="miku" />
                <h1> Hatsu </h1>
                <img className='heart' src={heartIcon} alt="heart" />
            </div>
            <div className="header_item_right">
                <div className="search_container">
                    <button onClick={handleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff"}} />
                    </button>
                </div>
                <button onClick={handleNavigate} className='sign_in_button'>Sign In</button>
            </div>
            <Burger size={0.4} isActive={navbarIsActive} onClick={() => {setNavbarIsActive(prevNavbarIsActive => !prevNavbarIsActive)}}></Burger>
            <MobileNavbarContainer $tertiaryColor={tertiaryColor} $navbarIsActive={navbarIsActive} $primaryColor={primaryColor}>
                <div className='navbar_item'>
                    <button onClick={handleNavigate} className='sign_in_button'>Sign In</button>
                </div>
                <div className='navbar_item'>
                    <button onClick={handleSearch} className='search_button'>Search</button>
                </div>
            </MobileNavbarContainer>
        </HeaderContainer>
    )
}

export default Header