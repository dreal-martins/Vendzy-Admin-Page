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
const ResetPassword = lazy(() => import("../modules/ResetPassword"));
const ReqOtpCode = lazy(() => import("../modules/ResetPassword/ReqOtpCode"));

// Authentication Pages Imports
const OverView = lazy(() => import("../modules/OverView"));
const Users = lazy(() => import("../modules/Users"));
const Merchants = lazy(() => import("../modules/Merchants"));
const Transactions = lazy(() => import("../modules/Transactions"));
const Orders = lazy(() => import("../modules/Orders"));
const Disputes = lazy(() => import("../modules/Disputes"));
const Notifications = lazy(() => import("../modules/Notifications"));
const UserDetail = lazy(() => import("../modules/Users/UserDetail"));
const MerchantDetail = lazy(() =>
  import("../modules/Merchants/MerchantDetail")
);
const TransactionDetails = lazy(() =>
  import("../modules/Transactions/TransactionDetails")
);
const OrderDetails = lazy(() => import("../modules/Orders/OrderDetails"));
const DisputesDetails = lazy(() =>
  import("../modules/Disputes/DisputesDetails")
);
const NotificationsDetails = lazy(() =>
  import("../modules/Notifications/NotificationDetails")
);
const ChangePassword = lazy(() =>
  import("../modules/ResetPassword/ChangePassword")
);

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
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Users />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: "user-detail/:userId",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <UserDetail />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "merchants",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Merchants />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: "merchant-detail/:merchantId",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <MerchantDetail />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "transactions",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Transactions />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: ":transaction-detail",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <TransactionDetails />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "order",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Orders />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: ":order-detail",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <OrderDetails />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "disputes",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Disputes />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: ":disputes-detail",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <DisputesDetails />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "notification",
              children: [
                {
                  index: true,
                  errorElement: <FourZeroZero />,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <Notifications />
                    </Suspense>
                  ),
                },
                {
                  path: ":notifications-detail",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <NotificationsDetails />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
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
                      <ReqOtpCode />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: "change-password",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <ChangePassword />
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
