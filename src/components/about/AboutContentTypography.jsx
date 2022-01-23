import React from "react";
import styled from "styled-components";

const AboutContentTypography = () => {
  return (
    <AboutContentTypographyContainer>
      <span>Who Am I?</span>
      <h3>I'm Salaar Khan, a Data Scientist and Web Developer</h3>
      <p>
        I am a freelancer based in the Pakistan and I have been building
        noteworthy websites and AI based applications for years, which comply
        with the latest design trends. I help convert a vision and an idea into
        meaningful and useful products. Having a sharp eye for product evolution
        helps me prioritize tasks, iterate fast and deliver faster.
      </p>
      <hr />
    </AboutContentTypographyContainer>
  );
};

export default AboutContentTypography;

const AboutContentTypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 25px;
  flex: 0.8;

  span {
    color: ${({ theme }) => theme.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    @media (max-width: 767.98px) {
      font-size: 18px;
    }
    @media (max-width: 479.98px) {
      font-size: 14px;
    }
  }
  h3 {
    color: ${({ theme }) => theme.secondary};
    font-size: 32px;
    font-weight: 700;
    line-height: 1.6;
    @media (max-width: 767.98px) {
      font-size: 24px;
      font-weight: 600;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
      font-weight: 600;
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.95;
    opacity: 0.7;
    @media (max-width: 767.98px) {
      font-size: 12px;
    }
    @media (max-width: 479.98px) {
      font-size: 10px;
    }
  }
  hr {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.secondary};
    opacity: 0.3;
    border: none;
  }
`;
