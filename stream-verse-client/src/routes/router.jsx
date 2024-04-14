import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

// Import the components
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

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
              <Home />
              {/* <RedirectToUserProfile /> */}
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
        children: [
          {
            path: "/dashboard/addNew",
            element: <div>New Video </div>,
          },
          {
            path: "/dashboard/viewDetails",
            element: <div>Details about Video</div>,
          },
        ],
      },
    ],
  },
]);
