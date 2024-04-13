import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <div></div>,
    children: [
      {
        path: "/dashboard/addNew",
        element: <div></div>,
      },
      {
        path: "/dashboard/viewDetails",
        element: <div></div>,
      },
    ],
  },
]);
