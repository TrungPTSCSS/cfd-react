import { Route, Switch } from "react-router";
import { Header, Footer, Navbar, PrivateRoute } from "./components";
import Cooperate from "./pages/Cooperate";
import CourseDetails from "./pages/CourseDetails";
import CoursePage from "./pages/CoursePage";
import Email from "./pages/Email";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import IntroduceCoin from "./pages/IntroduceCoin";
import Page404 from "./pages/Page404";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import ProjectPage from "./pages/ProjectPage";
import Register from "./pages/RegisterPage";
import Team from "./pages/Team";
import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react';
import { PopupModal } from "./components/PopupModal";
import authService from "./services/AuthService";


export const Context = createContext();

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('infoAccount')) || null);
  const [openLogin, setOpenLogin] = useState(false);
  const togglePopupLogin = (flag) => {
    if (typeof flag === 'undefined') {
      setOpenLogin(!openLogin);
    } else {
      setOpenLogin(flag);
    }
  }
  const login = async (form) => {
    let response = await authService.login(form);
    if (response.data) {
      await setUser({
        ...response.data
      })
      localStorage.setItem('infoAccount', JSON.stringify({...response.data,fullName:response.data.last_name + ' ' +response.data.first_name}))
      localStorage.setItem('token', JSON.stringify(response.data.token))
    } else {
      return response.error
    }
  }
  // console.log(user)
  const logout = () => {
    setUser(null);
    localStorage.removeItem('infoAccount');
  }
  return (
    <BrowserRouter>
      <Context.Provider value={{ user, login, logout, togglePopupLogin, openLogin }}>
        <Header />
        <Navbar />
        {
          !user && <PopupModal />
        }
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course-details/:tagname" component={CourseDetails} />
          <Route path="/faq" component={Faq} />
          <Route path="/introduce-coin" component={IntroduceCoin} />
          <Route path="/email" component={Email} />
          <Route path="/course-page" component={CoursePage} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/project-page" component={ProjectPage} />
          <Route path="/register/:tagname" component={Register} />
          <Route path="/team" component={Team} />
          <Route path="/payment" component={Payment} />
          <Route path="/cooperate" component={Cooperate} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}

