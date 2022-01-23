import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components";
import CloseModalButton from "./CloseModalButton";
import ThemeToggler from "./ThemeToggler";

const Modal = ({ children, to = "/" }) => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(true);
  const [render, setRender] = React.useState(show);

  const toggleShow = () => {
    setShow(!show);
  };

  React.useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) navigate(to);
  };

  return createPortal(
    render && (
      <ModalContainer onAnimationEnd={onAnimationEnd} show={show}>
        <CloseModalButton onClick={toggleShow} />
        <ThemeToggler />
        {children}
      </ModalContainer>
    ),
    document.getElementById("modal_root")
  );
};

export default Modal;

const slideTop = keyframes`
  0% {
    -webkit-transform: translateY(100vh);
            transform: translateY(100vh);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
`;
const slideDown = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100vh);
            transform: translateY(100vh);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondary};
  animation: ${({ show }) =>
    show
      ? css`
          ${slideTop} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        `
      : css`
          ${slideDown} 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        `};
`;
