import React from "react";
import { styled } from "styled-components";
import Registration from "./pages/registration/registration";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hi from "./pages/hi/Hi";

export const Wrapper = styled.div`
  width: 100%;
  heigth: 100%;
  min-height: 100vh;
  background: black;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

function Authorization() {
  return (
    <div className="App">
      <BrowserRouter basename="/HW20">
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/hi" element={<Hi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Authorization;
