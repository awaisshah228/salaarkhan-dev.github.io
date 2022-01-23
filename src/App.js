import React from "react";
import { Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useSelector } from "react-redux";
import { selectorTheme } from "./features/theme/themeSlice";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ResumePage = React.lazy(() => import("./pages/ResumePage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  const theme = useSelector(selectorTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} exact />
        <Route path="resume" element={<ResumePage />} exact />
        <Route path="projects" element={<ProjectsPage />} exact />
        <Route path="blog" element={<BlogPage />} exact />
        <Route path="contact" element={<ContactPage />} exact />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
