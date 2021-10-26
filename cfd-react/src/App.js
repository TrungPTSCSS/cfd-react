import { Route, Switch } from "react-router";
import { Header, Footer, Navbar } from "./components";
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
import { createContext } from 'react';


export const Context = createContext();
export default function App() {
  const user = {
    name: 'Trungbeo',
    fullName:'Phạm Thành Trung',
    email:'trungbeodeptrai@gmail.com',
    phone:'0344153437',
    urlFb:'',
    urlSkype:'',
    img: 'ádasdsad'
  }
  return (
    <BrowserRouter>
      <Context.Provider value={{ user }}>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course-details/:tagname" component={CourseDetails} />
          <Route path="/faq" component={Faq} />
          <Route path="/introduce-coin" component={IntroduceCoin} />
          <Route path="/email" component={Email} />
          <Route path="/course-page" component={CoursePage} />
          <Route path="/profile" component={Profile} />
          <Route path="/project-page" component={ProjectPage} />
          <Route path="/register" component={Register} />
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

