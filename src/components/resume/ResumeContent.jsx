import React from "react";
import styled from "styled-components";
import EducationContent from "./EducationContent";
import ExperienceContent from "./ExperienceContent";

const ResumeContent = () => {
  return (
    <ResumeContentContainer>
      <Left>
        <EducationContent />
      </Left>
      <Right>
        <ExperienceContent />
      </Right>
    </ResumeContentContainer>
  );
};

export default ResumeContent;

const Right = styled.div`
  flex: 0.5;
  width: 80%;
`;
const Left = styled.div`
  flex: 0.5;
  width: 80%;
`;
const ResumeContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 50px;
  width: 100%;
  flex: 1;

  @media (max-width: 1023.98px) {
    gap: 40px;
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  @media (max-width: 479.98px) {
    margin-top: 20px;
  }
`;
