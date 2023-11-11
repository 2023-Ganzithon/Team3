import Home from "./pages/Home";
import Findfood from "./pages/Findfood";
import Mycourse from "./pages/Mycourse";
import Mypage from "./pages/Mypage";
import User from "./pages/User";
import Popular from "./pages/Popular";
import Populardetail from "./pages/Populardetail";

const routes = [
    {
      path:'/home',
      component:Home
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
    }


  ]

  export default routes;