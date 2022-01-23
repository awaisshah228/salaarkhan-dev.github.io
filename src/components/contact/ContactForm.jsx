import React, { useState } from "react";
import styled from "styled-components";
import SnackBar from "my-react-snackbar";
import axios from "axios";
import TextArea from "../TextArea";
import TextField from "../TextField";
import Button from "../Button";

const ContactForm = () => {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subjects: "",
    message: "",
    _template: "table",
    _subject: "New Message | SK Portfolio",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    await setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      succeeded: false,
      submitting: true,
    });
    axios
      .post("https://formsubmit.co/ajax/salaarkhan311@gmail.com", form)
      .then(() => {
        setState({
          ...state,
          submitting: false,
          succeeded: true,
        });
        setForm({
          ...form,
          name: "",
          email: "",
          subjects: "",
          message: "",
        });
      })
      .catch((e) => {
        setState((prevState) => {
          return {
            ...prevState,
            submitting: false,
            succeeded: false,
            error: true,
          };
        });
        console.log("Error! ", e.message);
      });
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <SnackBar
        open={state.error}
        message={"Message sent failed!"}
        position="top-right"
        type="error"
        timeout={5000}
      />
      <SnackBar
        open={state.succeeded}
        message={"Message sent successfully!"}
        position="top-right"
        type="success"
        color="#00AB55"
        timeout={5000}
      />
      <h4>Message Me</h4>
      <span>
        <TextField
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={form.name}
          required
        />
        <TextField
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={form.email}
          required
        />
      </span>
      <TextField
        id="subjects"
        name="subjects"
        placeholder="Subject"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        value={form.subjects}
        required
      />
      <TextArea
        id="message"
        name="message"
        placeholder="Message"
        autoComplete="off"
        onChange={handleChange}
        value={form.message}
        required
      ></TextArea>
      <ButtonContainer>
        <Button type="submit" disabled={state.submitting}>
          Send Message
        </Button>
      </ButtonContainer>
    </ContactFormContainer>
  );
};

export default ContactForm;

const ButtonContainer = styled.div``;

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    display: flex;
    gap: 20px;

    @media (max-width: 479.98px) {
      flex-direction: column;
    }

    div {
      flex: 0.5;
    }
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 1023.98px) {
      font-size: 22px;
    }
    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;
