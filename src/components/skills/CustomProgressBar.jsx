import React from "react";
import styled from "styled-components";

const CustomProgressBar = ({ title = "HTML/CSS", width = 100 }) => {
  return (
    <CustomProgressBarContainer>
      <Top>
        <span>{title}</span>
        <span>{width <= 100 ? `${width}%` : "100%"}</span>
      </Top>
      <Bottom>
        <span
          style={{
            width: `${width}%`,
          }}
        ></span>
      </Bottom>
    </CustomProgressBarContainer>
  );
};

export default CustomProgressBar;

const Bottom = styled.div`
  background-color: ${({ theme }) => theme.card};
  width: 100%;
  height: 10px;
  position: relative;
  box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.2);

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.primary};
    height: 100%;
    max-width: 100%;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
    opacity: 0.7;

    :nth-child(1) {
      margin-right: 30px;
    }

    @media (max-width: 767.98px) {
      font-size: 14px;
    }
    @media (max-width: 630.98px) {
      font-size: 12px;
    }
  }
`;
const CustomProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  margin-bottom: 30px;
`;
