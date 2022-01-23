import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const toggleNav = () => {
    setShow(!show);
  };
  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <img src="assets/img/logo.png" alt="logo" />
        </Link>
      </Logo>
      <Hamburger onClick={toggleNav}>
        <span></span>
      </Hamburger>
      <NavItems show={show}>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/resume">Resume</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Projects</Link>
        </NavItem>
        {/* <NavItem>
          <Link to="/blog">Blog</Link>
        </NavItem> */}
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 767.98px) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 19px;
    justify-content: space-between;
    position: relative;
    width: 30px;
    &:before {
      align-self: flex-end;
      background-color: #f3f3f3;
      height: 3px;
      width: 85%;
      content: "";
    }
    &:after {
      align-self: flex-end;
      background-color: #f3f3f3;
      height: 3px;
      width: 100%;
      content: "";
    }
    span {
      width: 55%;
      height: 3px;
      align-self: flex-end;
      background-color: #f3f3f3;
    }
  }
  @media (max-width: 479.98px) {
    height: 19px;
    width: 25px;
    &:before {
      height: 2px;
      width: 75%;
      content: "";
    }
    &:after {
      height: 2px;
      width: 90%;
    }
    span {
      width: 45%;
      height: 2px;
    }
  }
`;

const Logo = styled.span`
  display: flex;
  flex: 0.3;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    cursor: pointer;

    @media (max-width: 767.98px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 479.98px) {
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 767.98px) {
    justify-content: flex-start;
  }
`;
const slideDown = keyframes`
  0% {
        max-height: 0;
      }
  100% {
        max-height: 1000px;
      }
`;
const NavItems = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  flex: 0.5;
  gap: 5px;
  max-height: 0;
  @media (max-width: 767.98px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    overflow: hidden;
    flex-direction: column;
    background-color: #191919;
    flex: 0.4;
    width: 180px;
    padding: 8px 20px;
    position: absolute;
    top: 80px;
    right: 20px;
    z-index: 2;
    animation: ${slideDown} 1.5s linear forwards;
  }
`;
const NavItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 25px;

  a {
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.grey[400]};

    :hover {
      color: ${({ theme }) => theme.primary};
      transition: 0.4s all ease;
    }
    @media (max-width: 767.98px) {
      color: ${({ theme }) => theme.grey[400]};
      opacity: 0.8;
      font-size: 14px;
      letter-spacing: 0.35px;
      padding: 8px 0;
    }
  }
`;

const NavbarContainer = styled.div`
  margin: 8px 16px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;
