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
    const [ search, setSearch ] = useState("")
    const [ searchResult, setSearchResult ] = useState([])
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleLogoClick = () => {
        navigate("/")
    }

    useEffect(() => {
        if (search.length > 0) {
            let typingTimer;

            const handleTimeout = async () => {
                // const result = await searchAnime(search)
                console.log("result")
            };

            clearTimeout(typingTimer);

            typingTimer = setTimeout(handleTimeout, 1000);

            return () => {
                clearTimeout(typingTimer);
            };
        }
    }, [search]);

    return (
        <HeaderContainer $haveSearchResult={searchResult.length > 0}  $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
            <div className="header_item_left" onClick={handleLogoClick}>
                <img className='logo' src={logo} alt="miku" />
                <h1> Hatsu </h1>
                <img className='heart' src={heartIcon} alt="heart" />
            </div>
            <div className="header_item_right">
                <div className="search_container">
                    <div className="search_bar">
                        <input value={search} type="text" name="" id="" placeholder='Search' onChange={handleChange} />
                        <button >
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </div>
                <button className='sign_in_button'>Sign In</button>
            </div>
            <Burger size={0.4} isActive={navbarIsActive} onClick={() => {setNavbarIsActive(prevNavbarIsActive => !prevNavbarIsActive)}}></Burger>
            <MobileNavbarContainer $tertiaryColor={tertiaryColor} $navbarIsActive={navbarIsActive} $primaryColor={primaryColor}>
                <div className='navbar_item'>
                    <button className='sign_in_button'>Sign In</button>
                </div>
                <div className='navbar_item'>
                    <div className="search_bar">
                        <input value={search} type="text" name="" id="" placeholder='Search' onChange={handleChange} />
                        <button >
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </div>
            </MobileNavbarContainer>
        </HeaderContainer>
    )
}

export default Header