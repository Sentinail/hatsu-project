import React, { useState, useEffect, useRef } from 'react'
import { ControlBar, Player, BigPlayButton } from 'video-react'
import CostumQualityButton from './CostumQualityButton';
import 'video-react/dist/video-react.css'
import Hls from 'hls.js';

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