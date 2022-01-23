import React from "react";
import styled from "styled-components";
import { MdLightMode, MdNightlight } from "react-icons/md";
import useDarkTheme from "../../hooks/useDarkMode";

const ThemeToggler = () => {
  const [theme, themeToggler] = useDarkTheme();
  return (
    <ThemeTogglerContainer onClick={themeToggler}>
      {theme === "light" ? (
        <MdNightlight size={25} />
      ) : (
        <MdLightMode size={25} />
      )}
    </ThemeTogglerContainer>
  );
};

export default ThemeToggler;
const ThemeTogglerContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  box-shadow: 2px 6px 14px rgba(0, 0, 0, 0.2);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;

  position: fixed;
  right: 40px;
  bottom: 30px;

  @media (max-width: 767.98px) {
    right: 20px;
    bottom: 30px;
  }

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;
