import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const Button = ({ children, disabled, ...otherProps }) => {
  return (
    <ButtonContainer {...otherProps} disabled={disabled}>
      <ClipLoader size={25} loading={disabled} />
      {!disabled && children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  border: none;
  outline: none;
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 30px;
  color: ${({ theme }) => theme.grey[100]};
  font-size: 14px;
  width: 10rem;
  height: 2.8rem;
  cursor: pointer;

  :hover {
    box-shadow: 4px 10px 14px rgba(0, 171, 85, 0.15);
    transition: all 0.25s ease-in-out;
  }
  @media (max-width: 767.98px) {
    width: 10rem;
    height: 2.6rem;
    font-size: 12px;
  }
  @media (max-width: 479.98px) {
    width: 10rem;
    height: 2.5rem;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
  }
  @media (max-width: 319.98px) {
    width: 9.5rem;
    height: 2.3rem;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
  }

  span {
    background: transparent !important;
    border-radius: 100%;
    border: 2px solid;
    border-color: ${({ theme }) => theme.grey[100]};
    border-bottom-color: transparent;
  }
`;
