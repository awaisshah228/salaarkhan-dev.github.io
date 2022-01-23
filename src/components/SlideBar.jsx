import React from "react";
import styled, { keyframes } from "styled-components";

const SlideBar = () => {
  return (
    <SlideBarContainer>
      <span></span>
      <span></span>
    </SlideBarContainer>
  );
};

export default SlideBar;

const leftToRight = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);

  }
`;

const SlideBarContainer = styled.div`
  width: 100px;
  height: 4px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  gap: 4px;

  @media (max-width: 767.98px) {
    width: 80px;
  }

  @media (max-width: 479.98px) {
    width: 60px;
  }

  span {
    height: 100%;
    width: 4px;
    background-color: ${({ theme }) => theme.background};
    opacity: 1 !important;
    animation: ${leftToRight} 3.5s linear forwards;
    animation-iteration-count: infinite;

    @media (max-width: 767.98px) {
      animation: ${leftToRight} 3s linear forwards;
      animation-iteration-count: infinite;
    }
    @media (max-width: 479.98px) {
      animation: ${leftToRight} 2.5s linear forwards;
      animation-iteration-count: infinite;
    }
  }
`;
