import React from "react";
import styled from "styled-components";
import { SiIonic } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMapSharp, IoSend } from "react-icons/io5";

const ContactIcons = () => {
  return (
    <ContactIconsContainer>
      <SiIonic size={30} />
      <IoMapSharp size={30} />
      <FaPhoneAlt size={30} />
      <IoSend size={30} />
    </ContactIconsContainer>
  );
};

export default ContactIcons;

const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 0.2;
  svg {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 15px;

    @media (max-width: 767.98px) {
      width: 28px;
      height: 28px;
    }
    @media (max-width: 479.98px) {
      width: 25px;
      height: 25px;
    }
  }
`;
