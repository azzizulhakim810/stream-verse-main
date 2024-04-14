import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

// Import the components
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import UpdateVideos from "../pages/UpdateVideos/UpdateVideos";
import UploadNewVideo from "../pages/UploadNewVideo/UploadNewVideo";
import ViewVideoDetails from "../pages/ViewVideoDetails/ViewVideoDetails";
import MyVideos from "../pages/MyVideos/MyVideos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      /* {
        path: "/",
        element: <Demo />,
      }, */
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/dashboard",
        element: (
          <>
            <SignedIn>
              {/* <Home /> */}
              <Dashboard />
              {/* <RedirectToUserProfile /> */}
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
        children: [
          {
            path: "/dashboard/myVideos",
            element: <MyVideos />,
          },
          {
            path: "/dashboard/uploadNew",
            element: <UploadNewVideo />,
          },
          {
            path: "/dashboard/update",
            element: <UpdateVideos />,
          },
          {
            path: "/dashboard/viewDetails",
            element: <ViewVideoDetails />,
          },
        ],
      },
    ],
  },
]);
