import React, { useState, useEffect, useRef } from 'react'
import { ControlBar, Player, BigPlayButton } from 'video-react'
import CostumQualityButton from './CostumQualityButton';
import 'video-react/dist/video-react.css'
import Hls from 'hls.js';


const sampleSources = [
    {
      "url": "https://www048.vipanicdn.net/streamhls/c75d4ba21b448078f347fab393e864cd/ep.1.1688569562.360.m3u8",
      "isM3U8": true,
      "quality": "360p"
    },
    {
      "url": "https://www048.vipanicdn.net/streamhls/c75d4ba21b448078f347fab393e864cd/ep.1.1688569562.480.m3u8",
      "isM3U8": true,
      "quality": "480p"
    },
    {
      "url": "https://www048.vipanicdn.net/streamhls/c75d4ba21b448078f347fab393e864cd/ep.1.1688569562.720.m3u8",
      "isM3U8": true,
      "quality": "720p"
    },
    {
      "url": "https://www048.vipanicdn.net/streamhls/c75d4ba21b448078f347fab393e864cd/ep.1.1688569562.1080.m3u8",
      "isM3U8": true,
      "quality": "1080p"
    },
    {
      "url": "https://www048.vipanicdn.net/streamhls/c75d4ba21b448078f347fab393e864cd/ep.1.1688569562.m3u8",
      "isM3U8": true,
      "quality": "default"
    },
    {
      "url": "https://www077.anifastcdn.info/videos/hls/mOHMkqYZvRxRO8H5X_ASRw/1693597984/207677/c75d4ba21b448078f347fab393e864cd/ep.1.1692352330.m3u8",
      "isM3U8": true,
      "quality": "backup"
    }
]

function HLSSource(props) {
    const { src, video, type } = props;
    const hlsRef = useRef(null);
  
    useEffect(() => {
      const hls = new Hls();
  
      if (Hls.isSupported()) {
        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
      }
  
      return () => {
        if (hlsRef.current) {
          hlsRef.current.destroy();
        }
      };
    }, [src, video]);
  
    return <source src={src} type={type || 'application/x-mpegURL'} />;
  }
 

const VideoPlayer2 = ({ sources }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const playerRef = useRef(null)

    useEffect(() => {
      const currentTime = playerRef.current.getState().player.currentTime
      playerRef.current.seek(currentTime)

    }, [currentIndex])

    return (
        <Player
          autoPlay
          ref={playerRef}
        >
            <HLSSource 
                isVideoChild
                src={sources.length > 0 ? `${sources[currentIndex].url}` : "/"}
            />
            
            <BigPlayButton position="center" />
            <ControlBar>
                
                <CostumQualityButton sources={sources} setCurrentIndex={setCurrentIndex} order={9}></CostumQualityButton>
            </ControlBar>
        </Player>
    )
}

export default VideoPlayer2