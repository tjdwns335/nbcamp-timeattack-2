import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage"
import TestPage from "../pages/TestPage"
import LoginPage from "../pages/non-auth/LoginPage"
import SingupPage from "../pages/non-auth/SignupPage"
import Layout from "../components/layout/Layout";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";
import NotFound from "../pages/default-set/NotFount";

export default function RouterPage() {
  const accessToken = localStorage.getItem("accessToken");
  const loginMode = !!accessToken;
  return (
    <Router>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home loginMode={loginMode} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/testPage" element={<TestPage />} />
        </Route>

        {/* 로그인 상태가 반드시 아니어야 하는 라우터 */}
        {loginMode && <>
          <Route element={<NonAuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SingupPage />} />
          </Route>
        </>}


        {/* 로그인이 필요한 라우터 */}
        {!loginMode && <>
          <Route element={<AuthLayout loginMode={loginMode} />}>
            <Route path="/user/:userId" />
          </Route>
        </>
        }
        {/* 404 Not Found */}
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}
