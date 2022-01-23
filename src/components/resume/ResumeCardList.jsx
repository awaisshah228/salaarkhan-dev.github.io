import React from "react";
import styled from "styled-components";

const ResumeCardList = ({ children }) => {
  return <ResumeCardListContainer>{children}</ResumeCardListContainer>;
};

export default ResumeCardList;

const ResumeCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
