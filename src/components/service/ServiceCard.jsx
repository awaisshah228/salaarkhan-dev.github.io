import React from "react";
import styled from "styled-components";

const ServiceCard = ({
  Icon,
  title = "Some Title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}) => {
  return (
    <ServiceCardContainer>
      <span>{Icon}</span>
      <h6>{title}</h6>
      <p>{description}</p>
    </ServiceCardContainer>
  );
};

export default ServiceCard;

const ServiceCardContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-bottom: 2px solid transparent;
  box-shadow: 2px 6px 14px rgba(0, 0, 0, 0.2);
  padding: 38px 42px;
  transition: all 0.35s ease-in-out;
  width: 354px;
  height: 252px;
  /* border-radius: 5px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 375.98px) {
    width: 250px;
    height: 180px;
  }
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }

  span {
    color: ${({ theme }) => theme.primary};
    svg {
      @media (max-width: 767.98px) {
        width: 50px;
        height: 50px;
      }
      @media (max-width: 479.98px) {
        width: 50px;
        height: 50px;
      }
      @media (max-width: 374.98px) {
        width: 40px;
        height: 40px;
      }
    }
  }
  h6 {
    color: ${({ theme }) => theme.secondary};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.5px;
    @media (max-width: 767.98px) {
      font-size: 18px;
    }
    @media (max-width: 479.98px) {
      font-size: 16px;
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
`;
