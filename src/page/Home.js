import React, { useContext } from 'react'
import { HomeContainer } from '../styled-components/HomeContainer'
import { themeContext } from '../context/themeContext'
import HomeCarousel from '../components/HomePageCarousel'
import VideoPlayer from '../components/VideoPlayer'
import TestPlay from '../tests/testPlay'

const source = [
  {
    "url": "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8",
    "isM3U8": true,
    "quality": "360p"
  },
  {
    "url": "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.480.m3u8",
    "isM3U8": true,
    "quality": "480p"
  },
  {
    "url": "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.720.m3u8",
    "isM3U8": true,
    "quality": "720p"
  },
  {
    "url": "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8",
    "isM3U8": true,
    "quality": "1080p"
  },
  {
    "url": "https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.m3u8",
    "isM3U8": true,
    "quality": "default"
  },
  {
    "url": "https://www071.anifastcdn.info/videos/hls/pniqpYK00De4U-z6lmp6rg/1693343923/184141/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1692389436.m3u8",
    "isM3U8": true,
    "quality": "backup"
  }
]

const Home = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(themeContext)
  
  return (
    <HomeContainer $primaryColor={primaryColor}  $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
      <section className='carousel_container'>
        <HomeCarousel></HomeCarousel>
      </section>
      <div className="divider" />
      <section className='content_container'>
        <VideoPlayer sources={source} currentIndex={0}></VideoPlayer>
      </section>
    </HomeContainer>
  )
}

export default Home