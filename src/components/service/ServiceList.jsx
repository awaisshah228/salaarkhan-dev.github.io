import React from "react";
import { FaChalkboardTeacher, FaReact, FaRobot } from "react-icons/fa";
import { SiDjango, SiExpress } from "react-icons/si";
import { GiOnTarget } from "react-icons/gi";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <ServiceListContainer>
      <ServiceCard
        Icon={<FaReact size={65} />}
        title="React Js"
        description="Develop web applications Frontend and Backend using React JS"
      />
      <ServiceCard
        Icon={<SiExpress size={65} />}
        title="Express Js"
        description="Provide a complete backend RESTful API using Express JS"
      />
      <ServiceCard
        Icon={<SiDjango size={65} />}
        title="Django"
        description="Provide a complete backend using Django/Django Restframework"
      />
      <ServiceCard
        Icon={<FaRobot size={65} />}
        title="Neural Network"
        description="Provide a complete solution of neural network problem using python"
      />
      <ServiceCard
        Icon={<GiOnTarget size={65} />}
        title="Consultation"
        description="Consult and help in your project completion"
      />
      <ServiceCard
        Icon={<FaChalkboardTeacher size={65} />}
        title="Tutoring"
        description="I will be your instructor and teach you web development"
      />
    </ServiceListContainer>
  );
};

export default ServiceList;

const ServiceListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 424.98px) {
    gap: 20px;
  }
`;
