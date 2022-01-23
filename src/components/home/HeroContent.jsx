import React from "react";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";

const HeroContent = () => {
  return (
    <HeroContentContainer>
      <h1>Salaar Khan</h1>
      <HeroContentAnimation>
        <h2>
          I'm a{" "}
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Poppins",
              color: "#00AB55",
              fontWeight: 600,
              fontSize: "inherit",
              letterSpacing: "3px",
            }}
            startDelay={500}
            cursorColor="#F9FAFB"
            multiText={[
              "Freelancer ",
              "Web Developer ",
              "Data Scientist ",
              "Web Designer ",
              "Ethical Hacker",
            ]}
            multiTextDelay={1000}
            typeSpeed={40}
            multiTextLoop
          />
        </h2>
      </HeroContentAnimation>
    </HeroContentContainer>
  );
};

export default HeroContent;

const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 50px;
  h1 {
    color: ${({ theme }) => theme.grey[100]};
    font-size: 70px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 25px;

    @media (max-width: 767.98px) {
      font-size: 55px;
      font-weight: 600;
    }
    @media (max-width: 479.98px) {
      font-size: 35px;
      font-weight: 600;
    }
  }
`;
const HeroContentAnimation = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.3px;
    display: flex;
    gap: 10px;
    color: ${({ theme }) => theme.grey[100]};

    @media (max-width: 767.98px) {
      font-size: 24px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;
