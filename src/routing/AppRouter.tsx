import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppPaths = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {AppPaths.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
