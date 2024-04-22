import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

// Import the components
import Blogs from "../components/Blogs/Blogs";
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Favourite from "../pages/Favourite/Favourite";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyVideos from "../pages/MyVideos/MyVideos";
import Register from "../pages/Register/Register";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import UpdateVideos from "../pages/UpdateVideos/UpdateVideos";
import UploadNewVideo from "../pages/UploadNewVideo/UploadNewVideo";
import ViewVideoDetails from "../pages/ViewVideoDetails/ViewVideoDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        /*  loader: () => fetch(`http://localhost:8000/api/videos`), */
      },
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
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/myVideos",
            element: (
              <>
                <SignedIn>
                  <MyVideos />
                </SignedIn>

                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            ),
          },
          {
            path: "/dashboard/uploadNew",
            element: (
              <>
                <SignedIn>
                  <UploadNewVideo />
                </SignedIn>

                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            ),
          },

          {
            path: "/dashboard/updateVideo/:id",
            element: (
              <>
                <SignedIn>
                  <UpdateVideos />
                </SignedIn>

                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:8000/api/updateOne/${params.id}`),
          },
          {
            path: "/dashboard/viewDetails/:id",
            element: <ViewVideoDetails />,
            loader: ({ params }) =>
              fetch(`http://localhost:8000/public/videos/${params.id}`),
          },

          {
            path: "/dashboard/blogs",
            element: <Blogs />,
          },
          {
            path: "/dashboard/favourite",
            element: <Favourite />,
          },
        ],
      },
    ],
  },
]);
