/* eslint-disable camelcase */
import { permissions } from "constants/permissions";
import RequiredAuthPage from "pages/RequiredAuthPage";
import React, { Suspense, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
// Sử dụng React.lazy() để chỉ tại một trang cụ thể khi user truy cập nó
const SignUpPage        = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage        = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage     = React.lazy(() => import("./pages/DashboardPage"));
const CampaignPage      = React.lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = React.lazy(() => import("./pages/StartCampaignPage"));
const CheckoutPage      = React.lazy(() => import("./pages/CheckoutPage"));
const ShippingPage      = React.lazy(() => import("./pages/ShippingPage"));
const UnauthorizedPage  = React.lazy(() => import("./pages/UnauthorizedPage"));
const CampaignView      = React.lazy(() =>
  import("./modules/campaign/CampaignView")
);
const LayoutPayment     = React.lazy(() => import("./layout/LayoutPayment"));
const LayoutDashboard   = React.lazy(() => import("./layout/LayoutDashboard"));

// eslint-disable-next-line no-unused-vars
const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [user]);

  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route index path="/" element={<DashboardPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route
            element={
              <RequiredAuthPage allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}></RequiredAuthPage>
            }
          >
            <Route path="/start-campaign" element={<StartCampaignPage />} />
          </Route>
          <Route path="/campaign/:slug" element={<CampaignView />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Route>
        <Route element={<LayoutPayment />}>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/shipping" element={<ShippingPage />}></Route>
        </Route>
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
