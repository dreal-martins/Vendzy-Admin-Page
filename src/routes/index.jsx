import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

// Layouts Imports
const AuthenticatedLayout = lazy(() => import("../layouts/authenticated"));
const UnAuthenticatedLayout = lazy(() => import("../layouts/unAuthenticated"));

// Error Components Imports
const FourZeroFour = lazy(() => import("../components/404"));
const FourZeroZero = lazy(() => import("../components/400"));

// UnAuthentication Pages Imports
const Signin = lazy(() => import("../modules/Signin"));
const Signup = lazy(() => import("../modules/Signup"));
const ResetPassword = lazy(() => import("../modules/ResetPassword"));
const ResetPasswordEmail = lazy(() => import("../modules/ResetPassword/Email"));

// Authentication Pages Imports
const OverView = lazy(() => import("../modules/OverView"));
const Users = lazy(() => import("../modules/Users"));
const Transactions = lazy(() => import("../modules/Transactions"));
const Orders = lazy(() => import("../modules/Orders"));
const Disputes = lazy(() => import("../modules/Disputes"));
const Notifications = lazy(() => import("../modules/Notifications"));

const MainBody = ({ children }) => {
  return (
    <div className={`h-[100vh] max-w-[100%] !font-outfit tracking-[-0.5px]`}>
      {children ? children : <Outlet />}
    </div>
  );
};

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      element: <MainBody />,
      errorElement: <FourZeroZero />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <AuthenticatedLayout />
            </Suspense>
          ),
          errorElement: <FourZeroZero />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <OverView />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "users",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Users />
                </Suspense>
              ),
            },
            {
              path: "transactions",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Transactions />
                </Suspense>
              ),
            },
            {
              path: "order",
              element: (
                <Suspense fallback={<Loader />}>
                  <Orders />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "disputes",
              element: (
                <Suspense fallback={<Loader />}>
                  <Disputes />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "notification",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Notifications />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "auth",
          element: (
            <Suspense fallback={<Loader />}>
              <UnAuthenticatedLayout />
            </Suspense>
          ),
          errorElement: <FourZeroZero />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <Signin />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "signup",
              element: (
                <Suspense fallback={<Loader />}>
                  <Signup />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "reset-password",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <ResetPassword />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: ":email/:data",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <ResetPasswordEmail />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "*",
              element: (
                <Suspense fallback={<Loader />}>
                  <FourZeroFour />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
