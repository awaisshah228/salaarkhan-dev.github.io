import React from "react";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";

const CloseModalButton = ({ onClick }) => {
  return (
    <CloseModalButtonContainer onClick={onClick}>
      <GrClose size={30} />
    </CloseModalButtonContainer>
  );
};

export default CloseModalButton;

const CloseModalButtonContainer = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 999;
  top: 30px;
  right: 60px;
  @media (max-width: 767.98px) {
    right: 25px;
  }

  svg {
    @media (max-width: 767.98px) {
      height: 20px;
      width: 20px;
    }
    path {
      stroke: ${({ theme }) => theme.secondary};
    }
    :hover {
      path {
        stroke: ${({ theme }) => theme.primary};
        transition: all 0.35s ease;
      }
    }
  }
`;
