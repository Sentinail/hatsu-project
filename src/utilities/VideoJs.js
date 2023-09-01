import React from 'react';
import videojs from 'video.js';
import Options from './CostumControlBar';
import 'video.js/dist/video-js.css';
import Hls from 'hls.js';
const hls = new Hls();

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {link, onReady, onOption} = props;

  React.useEffect(() => {
    const options = {
      techOrder: ['html5', 'hls'],
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true
    }; 

    if (!playerRef.current) {
      const player = playerRef.current = videojs(videoRef.current, options, () => {
        onReady && onReady(player);
      });
      
      if (Hls.isSupported()) {
        hls.loadSource(link);
        hls.attachMedia(videoRef.current);
        
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = link;
      }

      const OptionIcon = new Options(player, {})
      player.getChild("controlBar").addChild(OptionIcon, {})
      onOption && onOption(OptionIcon);

    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);

      if (Hls.isSupported()) {
        hls.loadSource(link);
        hls.attachMedia(videoRef.current);
        
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = link;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link, videoRef]);

  
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
      <div data-vjs-player>
        <video className='video-js vjs-big-play-centered' ref={videoRef}></video>
      </div>
  );
}

export default VideoJS;