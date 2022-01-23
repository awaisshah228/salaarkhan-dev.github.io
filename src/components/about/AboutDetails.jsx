import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectorTheme } from "../../features/theme/themeSlice";
import SnackBar from "my-react-snackbar";
import AboutSocialIcons from "./AboutSocialIcons";
import Button from "../Button";

const AboutDetails = () => {
  const [showInfo, setShowInfo] = useState(false);
  const theme = useSelector(selectorTheme);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInfo(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showInfo]);

  const handleClick = () => {
    setShowInfo(true);
  };

  return (
    <AboutDetailsContainer>
      <SnackBar
        open={showInfo}
        message={"Toggle theme for light/dark CV!"}
        position="top-right"
        type="info"
        color="#00AB55 !important"
        timeout={5000}
      />
      <Top>
        <Left>
          <div>
            <h4>Name:</h4>
            <span> Salaar Khan</span>
          </div>
          <div>
            <h4>Age:</h4>
            <span> 21</span>
          </div>
        </Left>
        <Right>
          <div>
            <h4>Email:</h4>
            <a href="mailto:salaarkhan311@gmail.com">
              <span> salaarkhan311@gmail.com</span>
            </a>
          </div>
          <div>
            <h4>From:</h4>
            <span> Attock City, Punjab, Pakistan</span>
          </div>
        </Right>
      </Top>
      <Bottom>
        <a href={`assets/cv/cv-${theme}.pdf`} download onClick={handleClick}>
          <Button disabled={false}>Download CV</Button>
        </a>
        <span></span>
        <AboutSocialIcons />
      </Bottom>
    </AboutDetailsContainer>
  );
};

export default AboutDetails;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  @media (max-width: 479.98px) {
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
  span {
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme.secondary};
    opacity: 0.3;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    h4 {
      font-size: 15px;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary};
      @media (max-width: 767.98px) {
        font-size: 12px;
      }
    }
    span {
      font-size: 15px;
      display: inline-block;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary};
      opacity: 0.7;
      @media (max-width: 767.98px) {
        font-size: 12px;
      }
    }
    a span {
      opacity: 1;
      color: ${({ theme }) => theme.primary};
      display: block;
    }
    a {
      text-decoration: none;
      :hover {
        opacity: 0.7;
        transition: all 1.2s ease;
      }
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    gap: 10px;

    h4 {
      font-size: 15px;
      font-weight: 400;
      @media (max-width: 767.98px) {
        font-size: 12px;
      }
    }
    span {
      font-size: 15px;
      display: inline-block;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary};
      opacity: 0.7;
      @media (max-width: 767.98px) {
        font-size: 12px;
      }
    }
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 0.5;
  gap: 100px;

  @media (max-width: 479.98px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
`;
const AboutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex: 0.2;
  width: 100%;
  height: 100%;
`;
