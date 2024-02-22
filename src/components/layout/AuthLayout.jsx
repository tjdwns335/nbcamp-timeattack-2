import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = ({ loginMode }) => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation loginMode={loginMode} />
      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default AuthLayout;
