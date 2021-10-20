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
function App() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Home /> */}
      {/* <CourseDetails /> */}
      {/* <Page404 /> */}
      {/* <Faq /> */}
      {/* <IntroduceCoin /> */}
      {/* <Cooperate /> */}
      {/* <Email /> */}
      {/* <CoursePage /> */}
      {/* <Profile /> */}
      <ProjectPage />
      {/* <Register /> */}
      <Team />
      {/* <Payment /> */}
      <Footer />
    </>
  );
}

export default App;
