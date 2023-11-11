import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import IdPwChoice from './pages/IdPwChoice';
import SignUpFin from './pages/SignUpFin';
import CourseMaking from './pages/CourseMaking';
import CourseMakingFin from './pages/CourseMakingFin';

function Router() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/idpwchoice" element={<IdPwChoice />} />
        <Route path="/signupfin" element={<SignUpFin />} />
        <Route path='/coursemaking' element={<CourseMaking />} />
        <Route path='/coursemakingfin' element={<CourseMakingFin />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Router;