import React from 'react';
import HLSPlayer from './testVideoPlayer';

const TestPlay = () => {
  const hlsStreamUrl = 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8'; // Replace with your HLS stream URL

  return (
    <div>
      <h1>HLS Video Player</h1>
      <HLSPlayer src={hlsStreamUrl} />
    </div>
  );
};

export default TestPlay;
