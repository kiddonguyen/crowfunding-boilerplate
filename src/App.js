import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// Sử dụng React.lazy() để chỉ tại một trang cụ thể khi user truy cập nó
const SignUpPage    = React.lazy(() => import('./pages/SignUpPage'));
const SignInPage    = React.lazy(() => import('./pages/SignInPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
