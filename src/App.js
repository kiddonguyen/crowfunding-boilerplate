import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// Sử dụng React.lazy() để chỉ tại một trang cụ thể khi user truy cập nó
const SignUpPage        = React.lazy(() => import('./pages/SignUpPage'));
const SignInPage        = React.lazy(() => import('./pages/SignInPage'));
const DashboardPage     = React.lazy(() => import('./pages/DashboardPage'));
const CampaignPage      = React.lazy(() => import('./pages/CampaignPage'));
const StartCampaignPage = React.lazy(() => import('./pages/StartCampaignPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/start-campaign" element={<StartCampaignPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
