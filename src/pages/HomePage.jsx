import React from "react";
import styled from "styled-components";
import Navbar from "../components/home/Navbar";
import VideoBackground from "../components/home/VideoBackground";
import HeroContent from "../components/home/HeroContent";
import SocialIcons from "../components/home/SocialIcons";

const HomePage = () => {
  return (
    <HomePageContainer>
      <VideoBackground />
      <HomePageContent>
        <Top>
          <Navbar />
        </Top>
        <Mid>
          <HeroContent />
        </Mid>
        <Bottom>
          <SocialIcons />
        </Bottom>
      </HomePageContent>
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;
const HomePageContainer = styled.div``;
const Top = styled.div`
  flex: 0.1;
  margin-top: 20px;
  width: 100%;
`;
const Mid = styled.div`
  flex: 0.5;
  width: 100%;
`;
const Bottom = styled.div`
  flex: 0.4;
  width: 100%;
`;
