import React from "react";
import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

const Preloader = () => {
  return (
    <PreloaderContainer>
      <PuffLoader color="#00AB55" size={70} />
    </PreloaderContainer>
  );
};

export default Preloader;

const PreloaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  span {
    /* background: transparent !important;
    border-radius: 100%;
    border: 2px solid;
    border-color: ${({ theme }) => theme.primary};
    border-bottom-color: transparent; */

    /* height: 50px;
    width: 50px;

    @media (max-width: 767.98px) {
      width: 35px;
      height: 35px;
    }
    @media (max-width: 479.98px) {
      width: 25px;
      height: 25px;
    } */
  }
`;
