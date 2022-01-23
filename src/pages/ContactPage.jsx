import React from "react";
import styled from "styled-components";
import ContactSection from "../components/contact/ContactSection";
import Modal from "../components/modal/Modal";
import PageHeading from "../components/PageHeading";

const ContactPage = () => {
  return (
    <Modal>
      <ContactPageContainer>
        <PageHeading subline={"Feel free to contact me anytimes"} slidebar>
          Get in Touch
        </PageHeading>
        <ContactSection />
      </ContactPageContainer>
    </Modal>
  );
};

export default ContactPage;

const ContactPageContainer = styled.div`
  overflow-y: scroll;
  max-height: 100vh;
  padding: 0 550px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex: 1;
  height: 100%;
  width: 100%;

  @media (max-width: 2559.98px) {
    padding: 0 260px;
    padding-top: 50px;
  }
  @media (max-width: 1439.98px) {
    padding: 0 120px;
    padding-top: 60px;
  }
  @media (max-width: 1023.98px) {
    padding: 0 100px;
    padding-top: 60px;
  }
  @media (max-width: 767.98px) {
    padding: 0 40px;
    padding-top: 60px;
  }
  @media (max-width: 479.98px) {
    padding: 0 30px;
    padding-top: 60px;
  }

  @media (max-width: 424.98px) {
    padding: 0 15px;
    padding-top: 60px;
  }

  /* overflow-x: hidden; */

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollBar};
    border-radius: 5px;
    opacity: 0.9;
  }
`;
