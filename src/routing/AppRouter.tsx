import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
// import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SubjectDetails from "../pages/subject/SubjectDetails";
import SubjectList from "../pages/subject/SubjectList";
import SubjectRequest from "../pages/subject/SubjectRequest";
import HomePage from "../pages/HomePage";
import AccomodationRequest from "../pages/accomodation/AccomodationRequest";
import AccommodationDetails from "../pages/accomodation/AccomodationDetails";
import AccommodationList from "../pages/accomodation/AccomodationList";

const AppPaths = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/subjects/",
    element: <SubjectList />,
  },
  {
    path: "/subjects/detail",
    element: <SubjectDetails />,
  },
  {
    path: "/subjects/request",
    element: <SubjectRequest />,
  },
  {
    path: "/accomodations/request",
    element: <AccomodationRequest />,
  },
  {
    path: "/accomodations/detail",
    element: <AccommodationDetails />,
  },
  {
    path: "/accomodations/",
    element: <AccommodationList />,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {AppPaths.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
