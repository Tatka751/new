import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Wrapper } from "../..";
import { Logo } from "../..";
import LogoSrc from "../../components/img/lock.jpg";
import { TitleFooter } from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const InputEmail = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 300px;
  heigth: 80px;
  font-family: Roboto;
`;

const TitleSignIn = styled.p`
  color: white;
  font-weight: 300;
  font-size: 60px;
  font-family: Roboto;
`;

const SignInButton = styled.button`
  margin: 8px;
  width: 300px;
  min-height: 4vh;
  font-family: Roboto;
  font-weight: 200;
  background: grey;
  border-radius: 7%;
  background: #0088de;
`;

const InputPassword = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 300px;
  heigth: 80px;
  font-family: Roboto;
`;

const GoRegistation = styled.p`
  color: white;
  font-weight: 300;
  font-size: 10px;
  font-family: Roboto;
`;

const LabelCheckbox = styled.label`
  width: 180px;
  color: white;
  font-size: 15px;
`;

const InputCheckbox = styled.input`
  color: white;
  font-size: 15px;
`;

function Authorization() {
  const key = "HW20";
  const [isCheckedRemember, setisCheckedRemember] = useState(false);

  const navigate = useNavigate();

  function RegistrationLink() {
    navigate("/registration");
  }

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    token: "",
    remember: 0,
  });

  function dataFromLocalStorage(key) {
    if (window.localStorage) {
      let resObj = JSON.parse(localStorage.getItem(key));

      return resObj;
    } else {
      alert(" localStorage has no data about you ");
    }
  }

  useEffect(() => {
    if (dataFromLocalStorage(key)) {
      let data = dataFromLocalStorage(key);
      state.email = data.inputEmail;
      state.password = data.inputPassword;
    }
  }, [state]);


  function handleChange({ target: { name, value } }) {
    switch(name) {
      case "email":  {
        setState({ ...state, [name]: value });
        break;
      }
      
    
      case "password": {
        setState({ ...state, [name]: value });
        break;
      }

      case "remember": {
        setisCheckedRemember(!isCheckedRemember);
        setState({ ...state, [name]: value });
        break;
      }

      case "signInButton":{
        navigate("/hi");
        break;
      }
    
    }
    
    
  }
 

  return (
    <>
      <Wrapper>
        <Logo src={LogoSrc} />
        <TitleSignIn> Sign in </TitleSignIn>
        <InputEmail
          name="email"
          placeholder="Email*"
          value={state.email}
          onChange={handleChange}
        ></InputEmail>
        <InputPassword
          name="password"
          type="password"
          placeholder="Password*"
          value={state.password}
          onChange={handleChange}
        ></InputPassword>
        <div>
          <InputCheckbox
            id="remember"
            type="checkbox"
            name="remember"
            value={isCheckedRemember}
            onChange={handleChange}
          ></InputCheckbox>
          <LabelCheckbox for="remember"> Remember me </LabelCheckbox>
        </div>
        <SignInButton name="signInButton" onClick={handleChange}>
          Sign in
        </SignInButton>
        <GoRegistation onClick={RegistrationLink}>
          Don't have account? Sign up
        </GoRegistation>
        <TitleFooter>Copyright © Your Website 2023 </TitleFooter>
      </Wrapper>
    </>
  );
}
export default Authorization;
