import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';
import Login from './pages/Login';
import Mainpage from './pages/mainpage';
import Findfood from './pages/Findfood';
import Mycourse from './pages/Mycourse';
import Mypage from './pages/Mypage';

function Router() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Mainpage />} />
        <Route path="/findfood" element={<Findfood />} />
        <Route path="/mycourse" element={<Mycourse />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Router;