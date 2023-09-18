import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import { Wrapper } from "../..";
import { Logo } from "../..";
import LogoSrc from "../../components/img/lock.jpg";
import { TitleFooter } from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const TitleSignUp = styled.p`
  color: white;
  font-weight: 300;
  font-size: 60px;
  font-family: Roboto;
`;

const LabelAgree = styled.label`
  width: 280px;
  heigth: 18px;
  color: white;
  font-size: 15px;
`;

const InputAgree = styled.input`
  background: grey;
  width: 18px;
  heigth: 18px;
`;

const SignInButton = styled.button`
  margin: 8px;
  width: 300px;
  min-height: 4vh;
  font-family: Roboto;
  font-weight: 200;
  background: #0088de;
  border-radius: 7%;
`;

const InputPassword = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 300px;
  heigth: 80px;
  font-family: Roboto;
  color: ${({ props }) => (props === "true" ? "green" : "red")};
`;
const InputEmail = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 300px;
  heigth: 80px;
  font-family: Roboto;
  color: ${({ props }) => (props === "true" ? "green" : "red")};
`;

const FirstName = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 140px;
  heigth: 80px;
  font-family: Roboto;
  color: ${({ props }) => (props === "true" ? "green" : "red")};
`;
const LastName = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 140px;
  heigth: 80px;
  font-family: Roboto;
  color: ${({ props }) => (props === "true" ? "green" : "red")};
`;

const GoToAuthorization = styled.p`
  color: white;
  font-weight: 300;
  font-size: 10px;
  font-family: Roboto;
`;

function Registration() {
  const navigate = useNavigate();

  function GoToAuthorizationLink() {
    navigate("/");
  }

  function isValidFirstLastName(data) {
    return /\b\w{3,50}\b/.test(data);
  }

  function isValidEmail(data) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(data);
  }

  function isValidPassword(data) {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(
      data
    );
  }

  const [state, setState] = useState({
    inputFirstName: "",
    inputLastName: "",
    inputEmail: "",
    inputPassword: "",
    token: "",
    remember: 0,
  });

  function dataToLocalStorage(data) {
    if (window.localStorage) {
      let obj = data;
      let key = "HW20";

      localStorage.setItem(key, JSON.stringify(obj));
    } else alert(" localStorage is not supported by your browser ");
  }
  const [color, setColor] = useState("");
  const [colorLastName, setColorLastName] = useState("");
  const [colorEmail, setColorEmail] = useState("");
  const [colorPassword, setColorPassword] = useState("");

  function handleInput({ target: { name, value } }) {
    switch(name) {
      case "inputFirstName":  {
        setState({ ...state, [name]: value });
        let res = isValidFirstLastName(value);
        res = String(res);
        setColor(res);
        break;
      }
      case "inputLastName":  {
        setState({ ...state, [name]: value });
        let res = isValidFirstLastName(value);
        res = String(res);
        setColorLastName(res);
        break;
      }
      case "inputEmail":  {
        setState({ ...state, [name]: value });
        let res = isValidEmail(value);
        res = String(res);
        setColorEmail(res);
          break;
      }
      case "inputPassword":  {
        setState({ ...state, [name]: value });
        let res = isValidPassword(value);
        res = String(res);
        setColorPassword(res);
      }
      case "signUpButton":  {
        if (
          state.inputFirstName !== "" &&
          state.inputLastName !== "" &&
          state.inputEmail !== "" &&
          state.inputPassword !== ""
        ) {
          dataToLocalStorage(state);
          navigate("/hi");
        } 
      }
    }
  }

  return (
    <>
      <Wrapper>
        <Logo src={LogoSrc} />
        <TitleSignUp> Sign up </TitleSignUp>
        <div>
          <FirstName
            name="inputFirstName"
            value={state.inputFirstName}
            placeholder="FirstName*"
            onChange={handleInput}
            props={color}
          ></FirstName>
          <LastName
            name="inputLastName"
            value={state.inputLastName}
            placeholder="LastName*"
            onChange={handleInput}
            props={colorLastName}
          ></LastName>
        </div>
        <InputEmail
          name="inputEmail"
          value={state.inputEmail}
          placeholder="Email*"
          onChange={handleInput}
          props={colorEmail}
        ></InputEmail>
        <InputPassword
          name="inputPassword"
          type="password"
          value={state.inputPassword}
          placeholder="Password*"
          onChange={handleInput}
          props={colorPassword}
        ></InputPassword>
        <div>
          <InputAgree id="input" type="checkbox"></InputAgree>
          <LabelAgree for="input">
            {" "}
            I want to recieve all information via email
          </LabelAgree>
        </div>
        <SignInButton name="signUpButton" onClick={handleInput}>
          Sign up
        </SignInButton>
        <GoToAuthorization onClick={GoToAuthorizationLink}>
          Already have an account? Sign in
        </GoToAuthorization>
        <TitleFooter>Copyright © Your Website 2023 </TitleFooter>
      </Wrapper>
    </>
  );
}

export default Registration;
