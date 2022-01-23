import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorTheme, switchTheme } from "../features/theme/themeSlice";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const useDarkTheme = () => {
  const theme = useSelector(selectorTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const dispatch = useDispatch();
  const themeToggler = () => {
    theme === THEMES.LIGHT
      ? dispatch(switchTheme(THEMES.DARK))
      : dispatch(switchTheme(THEMES.LIGHT));
  };

  return [theme, themeToggler];
};

export default useDarkTheme;
