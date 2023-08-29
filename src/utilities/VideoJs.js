import React from 'react';
import videojs from 'video.js';
import Options from './CostumControlBar';
import 'video.js/dist/video-js.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {link, onReady, onOption} = props;

  React.useEffect(() => {
    const options = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: link,
        type: 'application/x-mpegURL'
      }]
    }; 

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });

      const OptionIcon = new Options(player, {})
      player.getChild("controlBar").addChild(OptionIcon, {})
      onOption && onOption(OptionIcon);

    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
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
        <div ref={videoRef} />
      </div>
  );
}

export default VideoJS;