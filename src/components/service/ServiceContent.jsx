import React from "react";
import styled from "styled-components";
import PageHeading from "../PageHeading";
import ServiceList from "./ServiceList";

const ServiceContent = () => {
  return (
    <ServiceContentContainer>
      <PageHeading subline={"Services I offer to my clients"}>
        My Services
      </PageHeading>
      <ServiceList />
    </ServiceContentContainer>
  );
};

export default ServiceContent;

const ServiceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  gap: 30px;
  flex: 0.5;
  width: 100%;

  @media (max-width: 767.98px) {
    gap: 25px;
  }
  @media (max-width: 479.98px) {
    gap: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 424.98px) {
    gap: 5px;
    margin-bottom: 15px;
  }
`;
