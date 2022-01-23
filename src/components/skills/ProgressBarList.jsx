import React from "react";
import styled from "styled-components";

const ProgressBarList = ({ children }) => {
  return <ProgressBarListContainer>{children}</ProgressBarListContainer>;
};

export default ProgressBarList;

const ProgressBarListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 50%;
`;
