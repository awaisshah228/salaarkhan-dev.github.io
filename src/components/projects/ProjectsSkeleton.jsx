import React from "react";
import styled, { useTheme } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectsSkeleton = () => {
  const theme = useTheme();
  return (
    <ProjectsSkeletonContainer>
      <ImageContainer>
        <Skeleton
          baseColor={theme.skeletonBase}
          highlightColor={theme.skeletonHighlight}
          height="100%"
          style={{
            lineHeight: "1",
          }}
        />
      </ImageContainer>
      <TypographyContainer>
        <Skeleton
          baseColor={theme.skeletonBase}
          highlightColor={theme.skeletonHighlight}
          count={2}
          style={{
            lineHeight: "0.7",
          }}
        />
      </TypographyContainer>
    </ProjectsSkeletonContainer>
  );
};

export default ProjectsSkeleton;

const ImageContainer = styled.div`
  flex: 0.8;
`;
const TypographyContainer = styled.div`
  flex: 0.2;
  padding: 0 10px;
`;

const ProjectsSkeletonContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  box-shadow: 2px 6px 14px rgba(0, 0, 0, 0.2);
  transition: all 0.35s ease-in-out;
  width: 354px;
  height: 230px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 10px;

  @media (max-width: 375.98px) {
    width: 250px;
  }
`;
