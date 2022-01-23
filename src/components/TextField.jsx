import React from "react";
import styled from "styled-components";

const TextField = ({
  type = "text",
  name = "name",
  placeholder = "Placeholder",
  onChange,
  ...otherProps
}) => {
  return (
    <TextFieldContainer>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...otherProps}
      />
    </TextFieldContainer>
  );
};

export default TextField;

const TextFieldContainer = styled.div`
  input {
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.card};
    border: none;
    color: #777;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-radius: 0;
    font-size: 15px;
    height: 44px;
    padding: 9px 14px;
    background-clip: padding-box;
    display: block;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
    /* box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.2); */

    @media (max-width: 1023.98px) {
      font-size: 15px;
      height: 42px;
    }
    @media (max-width: 767.98px) {
      font-size: 13px;
      height: 36px;
    }
    @media (max-width: 479.98px) {
      font-size: 12px;
      height: 32px;
    }

    ::placeholder {
      color: #777;
    }
    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.card} inset; /* Change the color to your own background color */
      -webkit-text-fill-color: #777;
    }

    :focus {
      outline: none;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.primary};
    }
  }
`;
