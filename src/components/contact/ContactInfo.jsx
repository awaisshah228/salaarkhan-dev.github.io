import React from "react";
import styled from "styled-components";
import ContactDetails from "./ContactDetails";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <h4>Contact Info</h4>
      <p>
        Always available for freelance work if the right project comes along,
        Feel free to contact me!
      </p>
      <ContactDetails />
    </ContactInfoContainer>
  );
};

export default ContactInfo;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h4 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 1023.98px) {
      font-size: 22px;
    }
    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.95;
    opacity: 0.7;
    @media (max-width: 1023.98px) {
      font-size: 11px;
    }
    @media (max-width: 767.98px) {
      font-size: 12px;
    }
    @media (max-width: 479.98px) {
      font-size: 10px;
    }
  }
`;
