import React, { Suspense } from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "store/configureStore";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
// Sử dụng React.lazy() để chỉ tại một trang cụ thể khi user truy cập nó
const SignUpPage        = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage        = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage     = React.lazy(() => import("./pages/DashboardPage"));
const CampaignPage      = React.lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = React.lazy(() => import("./pages/StartCampaignPage"));
const CheckoutPage      = React.lazy(() => import("./pages/CheckoutPage"));
const ShippingPage      = React.lazy(() => import("./pages/ShippingPage"));
const UnauthorizedPage  = React.lazy(() => import("./pages/UnauthorizedPage"));
const RequiredAuthPage  = React.lazy(() => import("./pages/RequiredAuthPage"));
const CampaignView      = React.lazy(() =>
  import("./modules/campaign/CampaignView")
);
const LayoutPayment     = React.lazy(() => import("./layout/LayoutPayment"));
const LayoutDashboard   = React.lazy(() => import("./layout/LayoutDashboard"));
const container         = document.getElementById("root");
const router            = createBrowserRouter([
  {
    element: <LayoutDashboard></LayoutDashboard>,
    children: [
      { path: "/", element: <DashboardPage></DashboardPage> },
      { path: "/campaign", element: <CampaignPage></CampaignPage> },
      {
        element: <RequiredAuthPage></RequiredAuthPage>,
        children: [
          {
            path: "/start-campaign",
            element: <StartCampaignPage></StartCampaignPage>,
          },
        ],
      },
      {
        path: "/campaign/:slug",
        element: <CampaignView></CampaignView>,
      },
      {
        path: "/unauthorized",
        element: <UnauthorizedPage></UnauthorizedPage>,
      },
    ],
  },
  {
    element: <LayoutPayment></LayoutPayment>,
    children: [
      { path: "/checkout", element: <CheckoutPage></CheckoutPage> },
      { path: "/shipping", element: <ShippingPage></ShippingPage> },
    ],
  },
  {
    path: "/register",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/login",
    element: <SignInPage></SignInPage>,
  },
]);
createRoot(container).render(
  <>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Suspense>
      <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
    </Provider>
  </>
);

// root.render(
//   <Provider store={store}>
//     {/* BrowserRouter sử dụng HTML5 History API để thay đổi URL và hiển thị các trang
//     khác nhau trong ứng dụng của bạn mà không cần tải lại toàn bộ trang */}
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
