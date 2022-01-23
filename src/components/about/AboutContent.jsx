import React from "react";
import styled from "styled-components";
import AboutContentTypography from "./AboutContentTypography";
import AboutDetails from "./AboutDetails";

const AboutContent = () => {
  return (
    <AboutContentContainer>
      <Left>
        <img src="assets/img/info-1.jpeg" alt="profile" />
      </Left>
      <Right>
        <AboutContentTypography />
        <AboutDetails />
      </Right>
    </AboutContentContainer>
  );
};

export default AboutContent;

const Left = styled.div`
  flex: 0.4;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.18);
    vertical-align: middle;
    /* border-radius: 0.25rem; */
    border-radius: 60px 0 0 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    @media (max-width: 1200.98px) {
      width: 100%;
    }
    @media (max-width: 1023.98px) {
      border-radius: 50%;
      display: block;
      height: 250px;
      object-fit: cover;
      object-position: 80% 20%;
      width: 250px;
    }
    @media (max-width: 767.98px) {
      border-radius: 50%;
      display: block;
      height: 180px;
      object-fit: cover;
      object-position: 70% 30%;
      width: 180px;
    }
    @media (max-width: 479.98px) {
      border-radius: 50%;
      display: block;
      height: 140px;
      object-fit: cover;
      object-position: 70% 30%;
      width: 140px;
    }
  }
`;
const Right = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  padding-top: 30px;
  width: 100%;
  height: 100%;
  @media (max-width: 1023.98px) {
    gap: 18px;
    padding-top: 0;
  }
  @media (max-width: 767.98px) {
    gap: 16px;
    padding-top: 0;
  }
  @media (max-width: 479.98px) {
    gap: 14px;
    padding-top: 0;
  }
`;
const AboutContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;

  @media (max-width: 1023.98px) {
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 479.98px) {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
