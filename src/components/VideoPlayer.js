import React, {useRef, useState, useContext} from 'react'
import { VideoPlayerContainer } from '../styled-components/VideoPlayerContainer';
import VideoJS from '../utilities/VideoJs';
import videojs from 'video.js';
import { VideoSettingsContainer } from '../styled-components/VideoSettingsContainer';
import { themeContext } from '../context/themeContext';
import { VideoSettingsButton } from '../styled-components/VideoSettingsButton';

const VideoPlayer = ({ sources, currentIndex, setCurrentIndex }) => {
    const [ optionsIsActive, setOptionsIsActive ] = useState(false)
    const { primaryColor } = useContext(themeContext)
    const playerRef = useRef(null);
    const optionRef = useRef(null)

    const handleOptionState = (option) => {
        optionRef.current = option;

        option.on("options", () => {
            setOptionsIsActive(prevOptionsIsActive => !prevOptionsIsActive);
            
        })
    }

    const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('userinactive', () => {
        if (!player.paused()) {
            setOptionsIsActive(false);
        }
    });

    player.on('waiting', () => {
        videojs.log('player is waiting');
        
    });

    player.on('dispose', () => {
        videojs.log('player will dispose');
    });
    };

    return (
    <VideoPlayerContainer $primaryColor={primaryColor} $optionsIsActive={optionsIsActive}>
        <VideoJS link={sources[currentIndex].url} onOption={handleOptionState} onReady={handlePlayerReady}>

        </VideoJS>
        <VideoSettingsContainer $optionsIsActive={optionsIsActive} $primaryColor={primaryColor}> 
         {sources.map((source, index) => {
            return <VideoSettingsButton onClick={() => {setCurrentIndex(index)}}> { source.quality } </VideoSettingsButton>
         })}
        </VideoSettingsContainer>
    </VideoPlayerContainer>
    )
}

export default VideoPlayer