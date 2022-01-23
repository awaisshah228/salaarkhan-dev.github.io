import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const EducationContent = () => {
  return (
    <EducationContentContainer>
      <span>Education</span>
      <ResumeCardList>
        <ResumeCard
          title="Ethical Hacking"
          info="Udemy / Youtube / 2015-2018"
          description="Learned and Master Ethical Hacking by Self Learning"
        />
        <ResumeCard
          title="Computer Science"
          info="Government Post Graduate College / 2016-2018"
          description="Intermediate in Computer Science"
        />
        <ResumeCard
          title="Bachelor Degree"
          info="Comsats University Islamabad / 2018-2022"
          description="4 Years Bachelor Degree in Computer Sciences"
        />
      </ResumeCardList>
    </EducationContentContainer>
  );
};

export default EducationContent;

const EducationContentContainer = styled.div`
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
