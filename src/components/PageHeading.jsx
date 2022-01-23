import React from "react";
import styled from "styled-components";
import SlideBar from "./SlideBar";

const PageHeading = ({ slidebar, children, subline, style }) => {
  return (
    <PageHeadingContainer style={style}>
      <span>{subline}</span>
      <h2>{children}</h2>
      {slidebar && <SlideBar />}
    </PageHeadingContainer>
  );
};

export default PageHeading;

const PageHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  span {
    font-size: 14px;
    font-style: Poppins, sans-serif;
    color: ${({ theme }) => theme.secondary};
    opacity: 0.7;
    font-weight: 400;
    @media (max-width: 767.98px) {
      font-size: 11px;
    }
    @media (max-width: 479.98px) {
      font-size: 10px;
    }
  }
  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 46px;
    font-weight: 700;
    letter-spacing: -0.25px;
    line-height: 100%;
    margin-bottom: 20px;

    @media (max-width: 767.98px) {
      font-size: 32px;
      font-weight: 600;
    }
    @media (max-width: 479.98px) {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;
