import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchRepos,
  selectorRepos,
  selectorReposLoading,
} from "../../features/repos/reposSlice";
import CustomPagination from "../CustomPagination";
import ProjectCard from "./ProjectCard";
import ProjectsList from "./ProjectsList";
import ProjectsSkeleton from "./ProjectsSkeleton";

const ProjectContent = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [REPOS_PER_PAGE] = useState(3);

  React.useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  const reposLoading = useSelector(selectorReposLoading);
  const repos = useSelector(selectorRepos);

  const currentRepos = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * REPOS_PER_PAGE;
    const lastPageIndex = firstPageIndex + REPOS_PER_PAGE;
    return repos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, repos, REPOS_PER_PAGE]);

  return (
    <ProjectContentContainer>
      <ProjectsList>
        {reposLoading ? (
          <>
            <ProjectsSkeleton />
            <ProjectsSkeleton />
            <ProjectsSkeleton />
          </>
        ) : currentRepos?.length ? (
          currentRepos?.map((repo, id) => (
            <ProjectCard
              id={id}
              key={id}
              name={repo.name}
              html_url={repo.html_url}
              created_at={repo.created_at}
            />
          ))
        ) : (
          <h1>No project found!</h1>
        )}
      </ProjectsList>
      <PaginationWrapper>
        {!reposLoading && (
          <CustomPagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={repos.length}
            pageSize={REPOS_PER_PAGE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </PaginationWrapper>
    </ProjectContentContainer>
  );
};

export default ProjectContent;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 30px;
  margin-bottom: 30px;
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
