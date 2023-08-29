import React, {useRef, useState, useContext} from 'react'
import { VideoPlayerContainer } from '../styled-components/VideoPlayerContainer';
import { VideoSettingsContainer } from '../styled-components/VideoSettingsContainer';
import { themeContext } from '../context/themeContext';
import { VideoSettingsButton } from '../styled-components/VideoSettingsButton';
import VideoJS from '../utilities/VideoJs';
import videojs from 'video.js';

const VideoPlayer = ({ sources }) => {
    const [ optionsIsActive, setOptionsIsActive ] = useState(false)
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const { primaryColor, secondaryColor } = useContext(themeContext)
    const playerRef = useRef(null);
    const optionRef = useRef(null)

    const handleOptionState = (option) => {
        optionRef.current = option;

        option.on("options", () => {
            setOptionsIsActive(prevOptionsIsActive => !prevOptionsIsActive);
            console.log("options")
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
        <div className='wrapper'>
            <VideoJS link={sources[currentIndex].url} onOption={handleOptionState} onReady={handlePlayerReady}>

            </VideoJS>
            <VideoSettingsContainer $optionsIsActive={optionsIsActive} $primaryColor={primaryColor}> 
            {sources.map((source, index) => {
                return <VideoSettingsButton $secondaryColor={secondaryColor} onClick={() => {setCurrentIndex(index)}}> { source.quality } </VideoSettingsButton>
            })}
            </VideoSettingsContainer>
        </div>
    </VideoPlayerContainer>
    )
}

export default VideoPlayer