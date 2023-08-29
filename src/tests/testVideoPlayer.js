import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import Hls from 'hls.js';

const HLSPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize Video.js player
    const player = videojs(videoRef.current, {
      techOrder: ['html5', 'hls'],
    });

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // For browsers that support HLS natively (Safari)
      videoRef.current.src = src;
    }

    // Clean up on unmount
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        controls
        preload="auto"
      ></video>
    </div>
  );
};

export default HLSPlayer;
