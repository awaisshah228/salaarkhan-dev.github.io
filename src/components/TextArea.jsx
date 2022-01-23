import React from "react";
import styled from "styled-components";

const TextArea = ({
  placeholder = "Placeholder",
  children,
  onChange,
  ...otherProps
}) => {
  return (
    <TextAreaContainer
      placeholder={placeholder}
      onChange={onChange}
      {...otherProps}
    >
      {children}
    </TextAreaContainer>
  );
};

export default TextArea;

const TextAreaContainer = styled.textarea`
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.card};
  border: none;
  color: #777;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  border-radius: 0;
  font-size: 15px;
  padding: 9px 14px;
  background-clip: padding-box;
  resize: vertical;
  min-height: 150px;
  display: block;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  /* box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.2); */

  @media (max-width: 1023.98px) {
    font-size: 15px;
    min-height: 130px;
  }
  @media (max-width: 767.98px) {
    font-size: 13px;
    min-height: 120px;
  }
  @media (max-width: 479.98px) {
    font-size: 12px;
    min-height: 100px;
  }

  ::placeholder {
    color: #777;
  }

  :focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`;
