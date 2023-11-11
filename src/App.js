import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';

function App() {
  // NavBar를 특정 조건에 따라 숨기거나 표시하는 함수
  const shouldShowNavBar = () => {
    const hiddenPaths = [
      '/',
      '/login',
      '/signup',
      '/idpwchoice',
      '/signupfin',
      '/coursemaking',
      '/coursemakingfin',
    ];
    return !hiddenPaths.includes(window.location.pathname);
  };

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>

        {shouldShowNavBar() && <NavBar />}
      </Router>
    </>
  );
}

export default App;
