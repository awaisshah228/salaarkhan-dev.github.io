import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <Left>
        <ContactForm />
      </Left>
      <Right>
        <ContactInfo />
      </Right>
    </ContactSectionContainer>
  );
};

export default ContactSection;

const Right = styled.div`
  flex: 0.4;
`;
const Left = styled.div`
  flex: 0.6;
`;

const ContactSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 100%;
  flex: 1;

  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 479.98px) {
    gap: 50px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;
