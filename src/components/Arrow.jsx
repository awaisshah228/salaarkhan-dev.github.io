import React from "react";
import styled from "styled-components";

const Arrow = () => {
  return <ArrowContainer></ArrowContainer>;
};

export default Arrow;

const ArrowContainer = styled.span`
  margin-top: 2px;
  left: 0;
  &:before {
    position: absolute;
    background-color: ${({ theme }) => theme.primary};
    content: "";
    display: block;
    height: 16px;
    width: 16px;
    left: 0;
  }
  @media (max-width: 479.98px) {
    &:before {
      position: absolute;
      background-color: ${({ theme }) => theme.primary};
      content: "";
      display: block;
      height: 12px;
      width: 12px;
      left: 0;
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border: 8px solid transparent;
    left: 16px;
    border-left-color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 479.98px) {
    &:after {
      content: "";
      display: block;
      position: absolute;
      border: 6px solid transparent;
      left: 12px;
      border-left-color: ${({ theme }) => theme.primary};
    }
  }
`;
