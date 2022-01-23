import React from "react";
import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";

const ProjectCard = ({ name, html_url, created_at, id }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <ProjectCardContainer>
      <ImageContainer>
        <img src={`https://picsum.photos/350/200?${id}`} alt="cover" />
        <span></span>
        <DateContainer>
          {`${new Date(created_at).getDate()} ${
            monthNames[new Date(created_at).getMonth()]
          }, ${new Date(created_at).getUTCFullYear()}`}
        </DateContainer>
      </ImageContainer>
      <TypographyContainer>
        <h4>{name.length > 30 ? `${name.substring(0, 30)}...` : name}</h4>
        <a href={html_url} target="_blank" rel="noreferrer">
          <VscGithubInverted size={20} />
          <span>View Code</span>
        </a>
      </TypographyContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

const DateContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.grey[100]};
  padding: 5px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  @media (max-width: 767.98px) {
    font-size: 10px;
  }
  @media (max-width: 479.98px) {
    font-size: 8px;
  }
`;
const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  flex: 0.2;

  a {
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 8px 15px;
    border-radius: 25px;
    align-self: flex-start;
    cursor: pointer;
    color: ${({ theme }) => theme.grey[100]};
    font-size: 12px;
    text-decoration: none;

    :hover {
      box-shadow: 4px 10px 14px rgba(0, 171, 85, 0.15);
      transition: all 0.25s ease-in-out;
    }
    @media (max-width: 767.98px) {
      padding: 6px 12px;
      font-size: 10px;
    }
    @media (max-width: 479.98px) {
      padding: 4px 10px;
      font-size: 8px;
      font-weight: 400;
    }
  }

  h4 {
    font-weight: 500;
    font-size: 17px;
    line-height: 1.2;
    align-self: flex-start;
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 767.98px) {
      font-size: 14px;
      text-transform: uppercase;
    }
    @media (max-width: 479.98px) {
      font-size: 11px;
      text-transform: uppercase;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 0.8;
  position: relative;
  img {
    object-fit: cover;
    background-color: transparent;
    vertical-align: middle;
    border-radius: 0.25rem;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.darker} 30%,
      ${({ theme }) => theme.light} 90%
    );
    opacity: 0.7;
  }
`;

const ProjectCardContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-bottom: 2px solid transparent;
  box-shadow: 2px 6px 14px rgba(0, 0, 0, 0.2);
  transition: all 0.35s ease-in-out;
  width: 354px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 10px;

  @media (max-width: 375.98px) {
    width: 250px;
  }
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
