import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <img src="assets/video/404.gif" alt="404" />
      <Link to="/">Back to home</Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grey[100]};

  a {
    font-size: 16px;
    @media (max-width: 767.98px) {
      font-size: 14px;
    }
    @media (max-width: 479.98px) {
      font-size: 12px;
    }
  }

  img {
    @media (max-width: 1023.98px) {
      width: 500px;
      height: 500px;
    }
    @media (max-width: 767.98px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 479.98px) {
      width: 250px;
      height: 250px;
    }
  }
`;
