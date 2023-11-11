import Main from "./pages/Main";
import Findfood from "./pages/Findfood";
import Mycourse from "./pages/Mycourse";
import Mypage from "./pages/Mypage";
import User from "./pages/User";
import Popular from "./pages/Popular";
import Populardetail from "./pages/Populardetail";
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import IdPwChoice from './pages/IdPwChoice';
import SignUpFin from './pages/SignUpFin';
import CourseMaking from './pages/CourseMaking';
import CourseMakingFin from './pages/CourseMakingFin';

const routes = [
    {
      path:'/main',
      component:Main
    },
    {
      path:'/findfood',
      component:Findfood
    },
    {
      path:'/mycourse',
      component:Mycourse
    },
    {
      path:'/mypage',
      component:Mypage
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/popular',
      component:Popular
    },
    {
      path:'/populardetail',
      component:Populardetail
    },
    {
      path:'/',
      component:Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/signup',
      component:SignUp
    },
    {
      path:'/idpwchoice',
      component:IdPwChoice
    },
    {
      path:'/signupfin',
      component:SignUpFin
    },
    {
      path:'/coursemaking',
      component:CourseMaking
    },
    {
      path:'/coursemakingfin',
      component:CourseMakingFin
    }


  ]

  export default routes;