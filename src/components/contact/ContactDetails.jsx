import React from "react";
import styled from "styled-components";
import ContactIcons from "./ContactIcons";
import ContactTypography from "./ContactTypography";

const ContactDetails = () => {
  return (
    <ContactDetailsContainer>
      <ContactIcons />
      <Separator></Separator>
      <ContactTypography />
    </ContactDetailsContainer>
  );
};

export default ContactDetails;

const ContactDetailsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;
const Separator = styled.span`
  width: 2px;
  height: 100% !important;
  background-color: ${({ theme }) => theme.secondary};
  opacity: 0.3;
`;
