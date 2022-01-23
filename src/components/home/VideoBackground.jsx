import React from "react";
import styled from "styled-components";

const VideoBackground = () => {
  return (
    <VideoBackgroundContainer>
      <video autoPlay muted loop playsInline preload="none">
        <source src="assets/video/video.m4v" type="video/mp4" />
      </video>
      <VideoOverlay />
    </VideoBackgroundContainer>
  );
};

export default VideoBackground;

const VideoOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -998;
`;
const VideoBackgroundContainer = styled.div`
  video {
    /* background: url("assets/img/celebration.png") 0% 0% / cover repeat; */
    /* background-image: url("assets/img/celebration.png");
    background-repeat: repeat; */
    background-color: #121212;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
    object-fit: cover;
    z-index: -999;
  }
`;
