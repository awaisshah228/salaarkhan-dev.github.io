import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const ExperienceContent = () => {
  return (
    <ExperienceContentContainer>
      <span>Experience</span>
      <ResumeCardList>
        <ResumeCard
          title="Neural Network Developer"
          info={`Fiverr / 2019-${new Date().getFullYear()}`}
          description="Completed final year project and many other neural network projects on fiverr using python"
        />

        <ResumeCard
          title="Back-End Developer"
          info={`Fiverr / 2019-${new Date().getFullYear()}`}
          description="Completed final year project and many other projects on fiverr using Django and Express."
        />
        <ResumeCard
          title="Front-End Developer"
          info={`Fiverr / 2020-${new Date().getFullYear()}`}
          description="Completed final year project using ReactJS."
        />
      </ResumeCardList>
    </ExperienceContentContainer>
  );
};

export default ExperienceContent;

const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;
