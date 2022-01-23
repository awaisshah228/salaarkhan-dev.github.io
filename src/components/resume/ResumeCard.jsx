import React from "react";
import styled from "styled-components";
import Arrow from "../Arrow";

const ResumeCard = ({
  title = "Title",
  info = "Info",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
}) => {
  return (
    <ResumeCardContainer>
      <div>
        <Arrow />
        <h5>{title}</h5>
      </div>
      <h6>{info}</h6>
      <p>{description}</p>
    </ResumeCardContainer>
  );
};

export default ResumeCard;

const ResumeCardContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  width: 100%;
  height: 200px;
  position: relative;
  border-bottom: 1.5px solid ${({ theme }) => theme.border};
  border-left: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 2px 6px 14px rgba(0, 0, 0, 0.2);
  padding: 38px 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 963.98px) {
    padding: 28px 32px;
  }
  @media (max-width: 479.98px) {
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h5 {
    color: ${({ theme }) => theme.secondary};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.5px;
    @media (max-width: 963.98px) {
      font-size: 18px;
    }
    @media (max-width: 479.98px) {
      font-size: 16px;
    }
  }

  h6,
  p {
    color: ${({ theme }) => theme.secondary};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.95;
    opacity: 0.7;
    @media (max-width: 963.98px) {
      font-size: 12px;
    }
    @media (max-width: 479.98px) {
      font-size: 10px;
    }
  }
`;
