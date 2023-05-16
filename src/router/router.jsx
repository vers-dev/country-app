import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/layout/Layout";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [{
    path: '/',
    element: <HomePage />,
    index: true
  },
  {
    path: '/countries/:name',
    element: <CountryPage />,
    index: true
  }]
}])

export default router;