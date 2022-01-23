import React from "react";
import styled from "styled-components";
import PageHeading from "../PageHeading";
import CustomProgressBar from "./CustomProgressBar";
import ProgressBarList from "./ProgressBarList";

const SkillsContent = () => {
  return (
    <SkillsContentContainer>
      <PageHeading subline={"My level of knowledge in some tools"}>
        My Skills
      </PageHeading>
      <ProgressBarContainer>
        <ProgressBarList>
          <CustomProgressBar title="React Js" width={90} />
          <CustomProgressBar title="Express Js" width={82} />
          <CustomProgressBar title="C++ / JavaScript / Python" width={94} />
        </ProgressBarList>
        <ProgressBarList>
          <CustomProgressBar title="Django" width={87} />
          <CustomProgressBar
            title="Machine Learning / Deep Learning"
            width={96}
          />
          <CustomProgressBar title="HTML / CSS" width={92} />
        </ProgressBarList>
      </ProgressBarContainer>
    </SkillsContentContainer>
  );
};

export default SkillsContent;

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;

  @media (max-width: 479.98px) {
    flex-direction: column;
    gap: 0;
  }
`;
const SkillsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 15px;
  width: 100%;
  flex: 1;
  @media (max-width: 767.98px) {
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 20;
  }
  @media (max-width: 479.98px) {
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
  }
`;
